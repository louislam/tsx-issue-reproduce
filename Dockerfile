FROM node:18-slim
WORKDIR /test-tsx

COPY . .
RUN npm install
CMD ["npm", "start"]
