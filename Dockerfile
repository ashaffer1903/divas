FROM node

WORKDIR /app

COPY . /app

ENV NODE_ENV=production

#RUN yarn install

CMD npm start
