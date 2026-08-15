FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml .npmrc* ./

RUN npm install -g pnpm && pnpm add . --frozen-lockfile

COPY . .

RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "start" ]