FROM node:21-alpine as builder

WORKDIR /skirmish-client-sim/

COPY public/ /skirmish-client-sim/public
COPY src/ /skirmish-client-sim/src
COPY package.json /skirmish-client-sim/
COPY tsconfig.json /skirmish-client-sim/

RUN npm install

RUN npm run build

#Stage 2
FROM nginx:1.25.3

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /skirmish-client-sim/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]