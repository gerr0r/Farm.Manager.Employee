const db = require('../db/models')
const { hasRights } = require('../helpers/auth')

module.exports = {
    Query: {
        async getEmployees(parent, args, context) {
            const { token } = context
            if (!hasRights(token, 'master')) throw new Error('Unauthorized')
            return await db.Employee.findAll()
        }
    },

    Employee: {
        async __resolveReference(employee) {
            return await db.Employee.findByPk(employee.id)
        }
    }
}