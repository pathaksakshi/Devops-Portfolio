FROM node:22.9.0

WORKDIR /app
COPY . /app/
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
