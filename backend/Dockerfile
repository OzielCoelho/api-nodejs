###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:18-alpine3.17 AS development

WORKDIR /app

COPY package*.json ./

# RUN npm ci


###################
# BUILD FOR PRODUCTION
###################

# FROM node:18-alpine3.17 AS build

# WORKDIR /app

# COPY  package*.json ./

# COPY --from=development /app/node_modules ./node_modules

# COPY . .

# RUN npm run build

# ENV NODE_ENV prd

# RUN export CI=true

# RUN npm ci && npm cache clean --force

# ###################
# # PRODUCTION
# ###################

# FROM node:18-alpine3.17 AS production

# WORKDIR /app

# COPY --from=build /app/node_modules ./node_modules
# COPY --from=build /app/dist ./dist

# CMD [ "node", "dist/main.js" ]
