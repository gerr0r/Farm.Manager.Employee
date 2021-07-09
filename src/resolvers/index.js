const db = require('../db/models')
const { hasRights } = require('../helpers/auth')

module.exports = {
    Query: {
        async getEmployees(parent, args, context) {
            const { token } = context
            const adminId = hasRights(token, 'admin')
            if (!adminId) throw new Error('Unauthorized')
            return await db.Employee.findAll({where: { employerId: adminId }})
        },
        async getFarmEmployees(parent, args, context) {
            const { token } = context
            const adminId = hasRights(token, 'admin')
            if (!adminId) throw new Error('Unauthorized')

            return await db.Employee.findAll({where: { employerId: adminId, farmId: args.farmId }})
        }
    },

    Employee: {
        async __resolveReference(employee) {
            return await db.Employee.findByPk(employee.id)
        },
        farm(userFarm) {
            return { __typename: "Farm", id: userFarm.farmId };
        },
    }
}