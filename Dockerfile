FROM node:16.0.0-alpine as build-stage

EXPOSE 3000

WORKDIR /

COPY package*.json ./

ENV PATH /client/node_modules/.bin:$PATH
RUN npm install && npm cache clean --force
RUN npm config list

COPY . .

RUN npm audit
RUN npm run build

FROM nginx:1.15-alpine as prod
EXPOSE 80
COPY --from=build-stage /dist /usr/share/nginx/html
COPY --from=build-stage /nginx /etc/nginx


