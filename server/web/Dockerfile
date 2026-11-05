FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY server/web ./server/web
COPY web ./web
COPY site ./site
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080
CMD ["node", "server/web/index.mjs"]
