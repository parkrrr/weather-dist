require('dotenv').config();

const AWS = require("aws-sdk");
const axios = require('axios').default;
const pino = require('pino');

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

AWS.config.update({
  region: "us-east-1"
});

var baseUrl = "https://api.weather.gov";

async function getObservation(station) {
  try {
    logger.info(`retrieving observation (${station})`)
    let url = `${baseUrl}/stations/${station}/observations/latest`;
    logger.debug('url: ' + url);
    let record = await axios.get(url, { headers: { 'User-Agent': 'Axios' } });

    if (record.status != 200) {
      logger.error(`not-ok http response (${record.status}): ${record.statusText}`);
      return null;
    }

    logger.debug('got observation: ' + record.data.id);

    return record.data;
  }
  catch (error) {
    logger.error(error);
    return null;
  }
}

async function sendObservation(observation) {
  try {
    let station = observation.properties.station;
    logger.info(`sending observation (${station})`);
    let item = AWS.DynamoDB.Converter.marshall(observation);
    item.locationid = { S: station };
    item.observationtime = { S: observation.properties.timestamp };

    var params = {
      TableName: 'weather-data',
      Item: item
    };

    let dynamodb = new AWS.DynamoDB();
    await dynamodb.putItem(params).promise();
  }
  catch (error) {
    logger.error('failed to send observation: ' + error)
  }
}

async function getStations() {
  logger.info('getting stations');
  let docClient = new AWS.DynamoDB.DocumentClient();
  const params = {
    "TableName": "weather-config",
    "Limit": 1,
    "KeyConditionExpression": "#name = :name",
    "ExpressionAttributeValues": {
      ":name": "stations",      
    },
    "ExpressionAttributeNames": {
      "#name": "name"      
    },
  };

  let data = await docClient.query(params).promise();
  logger.info(`got back ${data.Count} (${data.ScannedCount} scanned)`);

  let stations = data.Items;
  return stations;
}

async function main() {
  let stationsConfig = await getStations();
  if (stationsConfig.length != 1) {
    logger.fatal('no stations configured');
    return;
  }

  let stations = stationsConfig[0].stations;

  stations.forEach(async function (s) {
    let record = await getObservation(s);
    if (record == null) {
      logger.fatal('failed to get observation');
      return;
    }

    await sendObservation(record);
  });
}

exports.handler = async () => {
  logger.info('starting');
  return await main();
}