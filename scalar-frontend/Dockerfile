# Stage 1: Build stage
FROM node:22-alpine AS build

WORKDIR /app

# Copy dependency definitions
COPY scalar-frontend/package*.json ./

# Install dependencies (using npm ci for clean, deterministic builds)
RUN npm ci

# Copy the rest of the frontend source code
COPY scalar-frontend/ .

# Build the application for production
RUN npm run build

# Stage 2: Production stage
FROM nginx:stable-alpine

# Copy custom nginx configuration for SPA routing
COPY scalar-frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled static files from build stage to nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
