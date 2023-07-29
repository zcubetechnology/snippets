FROM node:16
WORKDIR /opt/app/
COPY package.json app.js ./
RUN npm install
EXPOSE 3000
CMD ["node", "app.js"]