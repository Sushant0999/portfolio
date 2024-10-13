# Stage 1: Build the application
FROM node:18-alpine AS nodework

WORKDIR /myapp

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the application source code
COPY . .

COPY /etc/secrets/.env .

# Build the application
RUN npm run build

# Debugging: List the contents of /myapp to verify the build directory
RUN ls -al /myapp
RUN ls -al /myapp/dist

# Stage 2: Set up Nginx to serve the application
FROM nginx:1.23-alpine

WORKDIR /usr/share/nginx/html

# Clean up any existing files in the Nginx directory
RUN rm -rf ./*

# Copy the build output from the build stage
COPY --from=nodework /myapp/dist .

# Default command to run Nginx
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
