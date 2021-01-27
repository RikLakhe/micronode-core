import { gql } from 'apollo-server'

const typeDefs = gql`
    type User{
        user_id: ID!
        user_name: String!,
        user_email: String!,
        user_password: String!,
        active: Boolean!
    }

    type Query{
        users: [User!]!
    }
`

export default typeDefs;