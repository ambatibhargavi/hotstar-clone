# Stage 1: Build the Vite React app
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy source code and build it
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built files to nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port and start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
