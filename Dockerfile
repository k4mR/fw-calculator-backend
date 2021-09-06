FROM node:14

# Env
ENV DB_URL=mongodb://db:27017/?compressors=disabled&gssapiServiceName=mongodb
ENV DB_NAME=calculator
ENV PORT=3001

WORKDIR /usr/src/app
COPY package.json .
RUN npm install
ADD . /usr/src/app

RUN npm run build
# Start
CMD [ "npm", "start" ]
EXPOSE 3001