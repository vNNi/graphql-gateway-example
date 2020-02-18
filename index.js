const { ApolloServer } = require('apollo-server')
const { ApolloGateway } = require('@apollo/gateway')

const gateway = new ApolloGateway({
    serviceList: [
        { name: "beehive", url: "http://localhost:3002/graphql"},
        { name: "mixer", url: "http://localhost:7070/graphql" }
    ]
})

const server = new ApolloServer({
    gateway,
    engine: false,
    subscriptions: false,
});
server.listen().then(({url})=>{
    console.log(`Server ready at ${url}`)
})