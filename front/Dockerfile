FROM node:latest
MAINTAINER Raül Pérez <repejota@gmail.com>

# Install app dependencies
RUN mkdir -p /install
ENV PATH /install/node_modules/.bin:$PATH
ENV NODE_PATH /install/node_modules/
COPY package.json /install/package.json
WORKDIR /install
RUN npm install

# Deploy microservice
WORKDIR /opt/front
ADD . /opt/front

# Export service
EXPOSE 3000

CMD ["npm", "start"]
