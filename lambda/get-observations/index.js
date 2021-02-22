require('dotenv').config();

const AWS = require("aws-sdk");
const pino = require('pino');

const logger = pino({ level: process.env.LOG_LEVEL || 'info' });

AWS.config.update({
  region: "us-east-1"
});

async function getObservations(location, datetime) {
  try {
    if (!location.startsWith('https')) {
      let newLocation = `https://api.weather.gov/stations/${location}`;
      logger.debug(`setting location to <${newLocation}>`)
      location = newLocation;
    }

    datetime = datetime.toISOString();

    logger.info(`getting observations for <${location}> at <${datetime}>`);

    let docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
      "TableName": "weather-data",
      "KeyConditionExpression": "#locationid = :locationid AND #observationtime < :observationtime",
      "ExpressionAttributeValues": {
        ":locationid": location,
        ":observationtime": datetime
      },
      "ExpressionAttributeNames": {
        "#locationid": "locationid",
        "#observationtime": "observationtime"
      },
      "ScanIndexForward": false,
      "Limit": 50
    };

    let data = await docClient.query(params).promise();
    logger.info(`got back ${data.Count} (${data.ScannedCount} scanned)`);

    let observations = data.Items.map(i => i.properties);
    return observations;
  }
  catch (error) {
    logger.error('failed to get observations: ' + error)
  }
}

async function main(location, datetime) {
  let records = await getObservations(location, datetime);
  return records;
}

exports.handler = async function (request) {
  let body = {};
  try {
    body = JSON.parse(request.body);
  }
  catch (error) {
    logger.warn(`couldn't parse request body: ${request}`);
  }

  let location = body.location || 'KIND';
  let datetime = body.datetime || new Date();

  return await main(location, datetime);
}