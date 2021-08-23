import { gql } from 'apollo-server'

const typeDefs = gql`
    type User{
        user_id: String!
        user_name: String!,
        user_email: String!,
        user_password: String!,
        active: Boolean!,
    }

    type Company{
        company_id: String!
        company_code: String!,
        company_email: String!,
        company_name: String!,
        active: Boolean!,
    }

    type Event{
        event_id: String!
        event_title: String!,
        event_date: String!,
        event_note: String!,
        active: Boolean!,
    }
    
    type Mutation{
        createUser(name: String!,email:String!, password: String!): User!,
        updateUser(id:String!, name: String!,email:String!, password: String!, active: Boolean!): User!,
        deleteUser(id:String!):Boolean,
        createCompany(code: String!, name:String!, email: String!): Company!,
        updateCompany(id:String!, code: String!, name:String!, email: String!, active: Boolean!): User!,
        deleteCompany(id:String!):Boolean,
        createEvent(title: String!, date:String!, note: String!): Event!,
        updateEvent(id:String!, title: String!, date:String!, note: String!, active: Boolean!): Event!,
        deleteEvent(id:String!):Boolean,
    }

    type Query{
        users: [User!]!,
        findUser(id: String!): [User!]!,
        company: [Company!]!,
        findCompany(id: String!): [Company!]!,
        event: [Event!]!,
        findEvent(id: String!): [Event!]!,
    }
`

export default typeDefs;
