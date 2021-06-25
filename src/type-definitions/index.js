const { gql } = require('apollo-server')

module.exports = gql`
  extend type Query {
    getEmployees: [Employee]
  }

  type Employee @key(fields: "id") {
    id: ID!
    name: String!
  }
`