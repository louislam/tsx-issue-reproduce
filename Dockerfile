FROM node:18-slim
WORKDIR /test-tsx

RUN apt update && apt install -y git build-essential

COPY . .
RUN npm install
CMD ["npm", "start"]
