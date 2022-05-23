FROM docker.io/library/node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN cd web && \
    yarn install && \
    yarn run build --prod --output-path ../server/public && \
    cd ../ && \
    rm -rf web && \
    cp -r server/* ./ && \
    yarn install && \
    yarn run build

EXPOSE 3000
CMD [ "node", "dist/main.js" ]
