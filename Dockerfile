#use the official node.js image
FROM node:18-alpine

#set the working directory 
WORKDIR /

  COPY package*.json ./

#install dependencies
RUN npm install 

#copy all the file to the working directory
COPY . .

#express the port the container / app to run on
EXPOSE 3000

#start the app application
CMD ["node", "app.js"]