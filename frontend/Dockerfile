FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

# Set npm configurations for better reliability
RUN npm config set fetch-timeout 120000 && \
    npm config set fetch-retries 5 && \
    npm config set registry https://registry.npmjs.org/

# Retry logic for npm install
RUN npm install || npm install

COPY . .

CMD ["npm", "start"]

