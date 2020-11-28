#build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY ./package*.json ./
RUN npm install --silent
COPY ./ .
RUN yarn build

#production stage
FROM nginx as production-stage
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY ./nginx/defaultconf /etc/nginx/conf.d/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]