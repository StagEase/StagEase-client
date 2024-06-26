FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ========================================

FROM nginx:stable-alpine as production-stage
WORKDIR /usr/share/nginx/html

COPY --from=build-stage /app/dist/stagease-client/ .
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
