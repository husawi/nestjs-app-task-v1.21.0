
## Install Pakages and Run The Project test
```bash
install node:22.13.0 in your machen

$ git clone https://github.com/husawi/nestjs-app-task-v1.21.0.git

$ npm install

$ npm run build

$ docker compose up OR docker-compose up

```


## Docker
```bash
# Docker Compose

After install Docker in your machen, run this in the terminal:

Choose the Docker image architecture depending on your operating system,
linux/amd64,linux/arm64
 
Replace * according to your system that you have OR remove (--platform) flag if you dont need it
$ docker pull --platform=* firashusawi/nestjs-app-task:v1.21.0

USE this command when you in the path of the project
docker run -p 3000:3000 firashusawi/nestjs-app-task:v1.21.0


```

## PS

```bash
PS:

- I Have used Apollo server in the backend and apollo cliant in the frontend
- I Have used Capacitor Library to Run The Camera
```


## Pages The App

```bash
Camera App: http://localhost:3000/

Graphql API http://localhost:3000/graphql
```