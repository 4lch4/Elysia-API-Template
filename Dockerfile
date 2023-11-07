FROM oven/bun:1.0.10

WORKDIR /api

COPY package.json .
COPY bun.lockb .

RUN bun install --production

COPY src src
COPY tsconfig.json .

ENV NODE_ENV production

EXPOSE 4242

CMD ["bun", "src/index.ts"]

