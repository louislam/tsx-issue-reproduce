FROM node:20-slim
WORKDIR /test-tsx

COPY . .
RUN npm install
CMD ["npm", "start"]
