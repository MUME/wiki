FROM node:22-alpine AS builder

RUN apk add --no-cache git

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG VITEPRESS_BASE=/
ENV VITEPRESS_BASE=${VITEPRESS_BASE}

RUN npm run docs:build

FROM nginx:alpine

ARG VITEPRESS_BASE=/wiki/
# Create the directory structure for the base path so nginx serves it correctly
RUN mkdir -p /usr/share/nginx/html${VITEPRESS_BASE}
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html${VITEPRESS_BASE}
# Also copy to root for simple health checks or if served without base
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html

EXPOSE 80
