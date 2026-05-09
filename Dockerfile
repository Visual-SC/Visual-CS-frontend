# syntax=docker/dockerfile:1

# =========================================
# Stage 1: Build the React (Vite) application
# =========================================

ARG NODE_VERSION=24.14.0-alpine
FROM node:${NODE_VERSION} AS build

WORKDIR /app

# Copy dependency manifests first for better layer caching
COPY package.json package-lock.json ./

# Clean, reproducible install
RUN npm ci

# Copy application source
COPY . .

# Vite outputs to /app/dist
RUN npm run build


# =========================================
# Stage 2: Serve static files with Nginx
# =========================================

FROM nginx:stable-alpine AS production

# SPA fallback (client-side routing)
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy the Vite build output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
