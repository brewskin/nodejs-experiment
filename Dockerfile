# specify the node base image with your desired version node:<version>
FROM node:18
WORKDIR .
COPY . .
RUN ["npm", ""]
CMD ["node", "app.js"]

# replace this with your application's default port
EXPOSE 3000