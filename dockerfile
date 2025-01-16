#docker stop DOCKERID
#docker image rm -f webservice
#docker build -t webservice .
#docker run -p 80:3000 --env-file ./.env webservice

FROM node:14.17

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json .

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "npm", "start"]