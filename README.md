#Fastify-Docker 

Just running fastify in docker!

Building the image

`
docker build -t fastify-docker .
`

Running the docker image you just built

`
docker run -dp 3000:3000 fastify-docker
`
