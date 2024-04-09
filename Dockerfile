# Use an official Node runtime as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Gatsby CLI
RUN npm install -g gatsby-cli

# Install project dependencies
RUN npm install

RUN gatsby clean

RUN gatsby build

# Copy the entire project to the container
COPY . .

# Expose the port Gatsby uses
EXPOSE 8000

# Start Gatsby development server
CMD ["npm","start"]
