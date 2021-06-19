FROM node:14.17.1-alpine3.13
WORKDIR /app
COPY . .
RUN npm ci
RUN chmod +x ./wait-for
RUN chmod +x ./entrypoint.sh
CMD ["./wait-for", "db:5432", "--", "./entrypoint.sh"]
