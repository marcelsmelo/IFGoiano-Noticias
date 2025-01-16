#docker stop DOCKERID
#docker image rm -f webservice
#docker build -t ifgoiano-news .
#docker run -p 80:3000 --env-file ./.env ifgoiano-news

FROM node:14.17

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json .

USER node

RUN npm install

RUN npm audit fix --force

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "npm", "start"]