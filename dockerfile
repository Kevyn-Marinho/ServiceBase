FROM node:latest
COPY . /var/www
WORKDIR /var/www
ENV PORT=3000 \
    TESTENVIRONMENT="works"
RUN npm install 
ENTRYPOINT npm start
EXPOSE $PORT