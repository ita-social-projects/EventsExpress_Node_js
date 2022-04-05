FROM node

WORKDIR /app

COPY . .

RUN npm install

CMD npm docker:start