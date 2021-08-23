FROM node:14

COPY ./micronode-core /opt/app

WORKDIR /opt/app

RUN yarn

CMD yarn start:dev