const { gql } = require('apollo-server')

module.exports = gql`
  extend type Query {
    getEmployees: [Employee]
    getFarmEmployees(farmId: ID!): [Employee]
  }

  type Employee @key(fields: "id") {
    id: ID!
    name: String!
    number: String
    address: String
    salary: Int
    farm: Farm
  }

  extend type Farm @key(fields: "id") {
    id: ID! @external
  }
`