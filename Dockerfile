FROM node:12.18.2

ADD . deepch-design
WORKDIR /deepch-design
RUN yarn install
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
