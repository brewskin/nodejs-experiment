# specify the node base image with your desired version node:<version>
FROM node:18
WORKDIR .
COPY . .
RUN npm i
CMD npm start

# replace this with your application's default port
EXPOSE 8080