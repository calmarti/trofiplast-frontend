FROM node:16-alpine

WORKDIR /app

# THIS WOULD SPEED UP REBUILDS
# COPY package.json .
# RUN npm install 
# And delete the RUN npm install below

COPY . .

RUN npm install 


CMD ["npm", "start"]