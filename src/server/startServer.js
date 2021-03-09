import { ApolloServer } from 'apollo-server-express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'

import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/typeDefs";

const PORT = process.env.PORT || 7000;

const apolloServer = new ApolloServer({
    resolvers,
    typeDefs,
})

const app = express();

app.use(cookieParser());

app.use(cors({
    origin: (origin,cb)=>cb(null,true),
    credentials: true
}))

app.get('/', (request, response) => {
    response.json({info: 'Core server up and running !!!!'})
})

apolloServer.applyMiddleware({app, cors:false, path:'/graphql'})

app.listen(PORT,()=>{
    console.log(`API Gateway listening at ${PORT}`)
})