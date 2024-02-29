# https://hub.docker.com/_/node
FROM node:20.11

WORKDIR /app

COPY . .

RUN npm install && npm run build

EXPOSE 3000

CMD [ "npm", "start" ]

# 1) Build image...
# 2) Run Image -port outside(windows):inside(container)
# |> docker run --env-file=./.env.local -p 3000:3000 alfonso2024:latest

# end docker) Shut down WSL and clean ram 
# (https://learn.microsoft.com/en-us/answers/questions/1187030/vmmemwsl-using-7gb-of-ram-even-when-ubuntu-app-is)
# |> wsl --shutdown