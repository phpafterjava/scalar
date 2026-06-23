FROM node:22-alpine

WORKDIR /var/www/scalar-frontend

# Copy dependency files
COPY scalar-frontend/package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy the rest of the application files
COPY scalar-frontend/ .

# Expose Vite's dev server port
EXPOSE 5173

# Start Vite dev server with host binding to allow access from the host machine
CMD ["npm", "run", "dev", "--", "--host"]
