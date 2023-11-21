FROM node:18 AS build

RUN npm install -g typescript
RUN npm install -g pm2
RUN pm2 install pm2-logrotate && pm2 set pm2-logrotate:max_size 10M && pm2 set pm2-logrotate:compress true

RUN mkdir /app
WORKDIR /app
COPY ./services/manager/package.json  ./
COPY ./services/manager/package-lock.json ./
RUN npm install --production

COPY ./services/manager ./
RUN npm run build

RUN mkdir logs
WORKDIR /app/logs
RUN touch output.log
RUN touch error.log

WORKDIR /app

CMD [ "pm2", "start", "./ecosystem.config.js", "--no-daemon"]