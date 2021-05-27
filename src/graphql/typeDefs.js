import { gql } from 'apollo-server'

const typeDefs = gql`
    type User{
        user_id: String!
        user_name: String!,
        user_email: String!,
        user_password: String!,
        active: Boolean!,
    }
    
    type Mutation{
        createUser(name: String!,email:String!, password: String!): User!,
        updateUser(id:String!, name: String!,email:String!, password: String!, active: Boolean!): User!,
        deleteUser(id:String!):Boolean,
    }

    type Query{
        users: [User!]!,
        findUser(id: String!): [User!]!,
    }
`

export default typeDefs;
