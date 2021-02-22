FROM public.ecr.aws/lambda/nodejs:14

COPY index.js package*.json /var/task/
RUN npm ci --only=production

CMD [ "index.handler" ] 