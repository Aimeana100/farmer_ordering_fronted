FROM node:latest
WORKDIR /frontend

COPY ./package.json ./package.json

COPY ./ ./

RUN npm install

RUN npm run build
RUN ls -ali

EXPOSE 5000

CMD ["npm", "start"]