# Stage 1: Build stage
FROM node:alpine AS build

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application (if applicable)
# RUN npm run build

# Stage 2: Production stage
FROM node:alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=build /usr/src/app .

# Expose the port the app runs on
EXPOSE 8081

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]