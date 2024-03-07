#primera etapa compilado
FROM node:18.19.1-alpine3.19 as build
WORKDIR /app
COPY package*.json ./
RUN npm ci --force
COPY . .
RUN npm run build --prod

#segunda etapa
FROM nginx:1.25.4-alpine3.18-slim
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/role-permission-directive /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
