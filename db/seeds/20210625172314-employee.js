const table = 'Employee'
const createdAt = new Date()
const updatedAt = new Date()
const data = [{
  id: '982d8913-2f70-4ad6-be46-c9a4e79de6f1',
  name: 'Pauly Gives',
  number: '+994 945 277 4887',
  address: '72419 Crownhardt Junction',
  salary: 5000,
  employerId: '21c3571b-af28-46c4-88eb-d08558a8ce5d',
  farmId: '9f0a28bf-3eb6-412c-bc49-3e569902f482',
  createdAt,
  updatedAt
}, {
  id: '7c70d5a1-244e-4c46-9c50-6b157825eb2f',
  name: 'Humfrid Shoobridge',
  number: '+51 827 818 7156',
  address: '6497 Debra Park	',
  salary: 5000,
  employerId: '21c3571b-af28-46c4-88eb-d08558a8ce5d',
  farmId: '9f0a28bf-3eb6-412c-bc49-3e569902f482',
  createdAt,
  updatedAt
}, {
  id: '63ae7853-fb77-4b24-b186-9ad4f4dbe43a',
  name: 'Ricky Deyes',
  number: '+86 859 981 2617',
  address: '41987 Forster Street',
  salary: 5000,
  employerId: '21c3571b-af28-46c4-88eb-d08558a8ce5d',
  farmId: '9f0a28bf-3eb6-412c-bc49-3e569902f482',
  createdAt,
  updatedAt
}, {
  id: 'e315416c-fde5-4f6d-9890-889779fb3e80',
  name: 'Avictor Cranidge',
  number: '+86 467 665 9895',
  address: '7266 Reindahl Plaza',
  salary: 5000,
  employerId: '21c3571b-af28-46c4-88eb-d08558a8ce5d',
  farmId: '431aa88e-84a7-4b01-b1cb-40ca0391dcf9',
  createdAt,
  updatedAt
}, {
  id: '981cdb67-7c0e-4d27-892b-676a827e51b2',
  name: 'Witty Gofford',
  number: '+55 117 799 1639',
  address: '61818 Jackson Street',
  salary: 5000,
  employerId: '21c3571b-af28-46c4-88eb-d08558a8ce5d',
  farmId: '431aa88e-84a7-4b01-b1cb-40ca0391dcf9',
  createdAt,
  updatedAt
}, {
  id: '7e8ec2a5-8abb-4284-8d5d-9014d4c39542',
  name: 'Chevy Ketchen',
  number: '+62 791 366 7493',
  address: '9758 Susan Junction',
  salary: 5000,
  employerId: '21c3571b-af28-46c4-88eb-d08558a8ce5d',
  farmId: '431aa88e-84a7-4b01-b1cb-40ca0391dcf9',
  createdAt,
  updatedAt
}, {
  id: 'afd3491f-e86a-4c7e-9031-c4dc3001b1e3',
  name: 'Gradey Pledge',
  number: '+48 384 216 7642',
  address: '68730 Lotheville Avenue',
  salary: 5000,
  employerId: '21c3571b-af28-46c4-88eb-d08558a8ce5d',
  farmId: '0f70c5d1-fcb4-4e83-85ab-5a06fd1d1e72',
  createdAt,
  updatedAt
}, {
  id: '3f09edb0-8d37-435c-af8e-37295617a162',
  name: 'Melody Hargroves',
  number: '+63 263 706 4110',
  address: '042 Sullivan Avenue',
  salary: 5000,
  employerId: '21c3571b-af28-46c4-88eb-d08558a8ce5d',
  farmId: '0f70c5d1-fcb4-4e83-85ab-5a06fd1d1e72',
  createdAt,
  updatedAt
}, {
  id: '9cb67ec2-487b-4450-9f6d-a052ba2493cd',
  name: 'Nadean Fifoot',
  number: '+380 883 488 7324',
  address: '55090 Mesta Lane',
  salary: 5000,
  employerId: '21c3571b-af28-46c4-88eb-d08558a8ce5d',
  farmId: '0f70c5d1-fcb4-4e83-85ab-5a06fd1d1e72',
  createdAt,
  updatedAt
}]

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(table, data, {})
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete(table, null, {})
  }
}
