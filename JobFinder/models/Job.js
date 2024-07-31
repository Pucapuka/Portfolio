const Sequelize = require('sequelize');
const db = require('../db/connection');

const Job = db.define('job', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
    },
    salary:{
        type: Sequelize.DECIMAL(10,2),
    },
    company: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job: {
        type: Sequelize.INTEGER,
    }
});

module.exports = Job;