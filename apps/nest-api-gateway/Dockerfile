# Development stage
FROM node:18-alpine as development

WORKDIR /usr/src/app

COPY --chown=node ../../package*.json .

RUN npm ci

COPY --chown=node:node . ./apps/nest-api-gateway

COPY --chown=node:node ../../ .

USER node

# Build stage
FROM node:18-alpine as build

WORKDIR /usr/src/app

COPY --chown=node ../../package*.json .

COPY --chown=node:node --from=development /usr/src/app/node_modules ./node_modules

COPY --chown=node:node . ./apps/nest-api-gateway

COPY --chown=node:node ../../ .

RUN npm run build nest-api-gateway

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

USER node

# Production stage
FROM node:18-alpine as production

WORKDIR /usr/src/app

COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules

COPY --chown=node:node --from=build /usr/src/app/dist/apps/nest-api-gateway ./dist

CMD [ "node", "dist/main.js" ]

USER node
