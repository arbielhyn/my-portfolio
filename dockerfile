# Use the official Node.js image as a build environment
FROM node:18 AS build

# Set the working directory
WORKDIR /lacanlale_arbie1_final_site

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a lightweight web server to serve the production build
FROM nginx:alpine

# Copy the build output to the Nginx server's public folder
COPY --from=build /lacanlale_arbie1_final_site/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
