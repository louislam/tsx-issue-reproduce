FROM node:18-slim
WORKDIR /test-tsx

RUN apt update && apt install -y git

COPY . .
RUN npm install --production
CMD ["npm", "start"]
