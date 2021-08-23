import { ApolloServer } from 'apollo-server-express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'

import resolvers from "#root/graphql/resolvers";
import typeDefs from "#root/graphql/typeDefs";
import {customLog} from "#root/helper/log";
import formatGraphQAErrors from "./formatGraphQAErrors"

const PORT = process.env.PORT || 7000;

const apolloServer = new ApolloServer({
    formatError: formatGraphQAErrors,
    resolvers,
    typeDefs,
    context: ({req})=>{
        const token = req.headers.authorization || '';
        console.log("Authorization token",token);
    }
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
    customLog(`API Gateway listening at ${PORT}`)
})
