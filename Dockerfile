FROM node:18-alpine as base
RUN apk add --no-cache g++ make py3-pip libc6-compat
RUN npm install -g npm@10.5.2
WORKDIR /app
COPY . .
RUN ls -la
COPY package*.json ./
EXPOSE 3000
RUN yarn install
RUN yarn run build
CMD yarn run dev