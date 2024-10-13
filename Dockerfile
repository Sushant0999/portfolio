# Stage 1: Build the application
FROM node:18-alpine AS nodework

WORKDIR /myapp

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the application source code
COPY . .

# Copy the .env file into the container
# Make sure to replace '/etc/secrets/.env' with the appropriate path
# COPY /etc/secrets/.env ./

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

# Optionally, copy the .env file to the Nginx container if needed (not recommended for production)
COPY --from=nodework /myapp/.env ./

# Default command to run Nginx
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
