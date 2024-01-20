FROM node:18-slim
WORKDIR /test-tsx

RUN apt update && apt install -y git build-essential python3

COPY . .
RUN npm install
CMD ["npm", "start"]
