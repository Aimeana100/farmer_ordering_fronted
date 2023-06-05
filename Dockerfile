FROM node:latest
WORKDIR /app

COPY ./package.json ./package.json
COPY ./ ./
RUN npm install
RUN npm run build
RUN ls -ali

EXPOSE 5173
CMD ["npm", "start"]