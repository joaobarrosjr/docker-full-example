FROM node:latest
MAINTAINER Raül Pérez <repejota@gmail.com>

# Install microservice dependencies
RUN mkdir -p /install
ENV PATH /install/node_modules/.bin:$PATH
ENV NODE_PATH /install/node_modules/
COPY package.json /install/package.json
WORKDIR /install
RUN npm install

# Bundle microservice source code to the container
WORKDIR /opt/api
COPY . /opt/api

# Export service
EXPOSE 3001

CMD ["npm", "start"]
