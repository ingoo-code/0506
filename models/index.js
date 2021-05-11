'use strict';

//const path = require('path');
const Sequelize = require('sequelize');
//const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const User = require('./user');
const db = {};

let sequelize;
/*
if (config.use_env_variable) {
  sequelize = new Sequelize('postgres://ettkuuldqtgzaj:a2f0588a8304882a9b55a20d1c09d7499b1a8d2a23281c8c883f4b4f3c38a64a@ec2-54-166-167-192.compute-1.amazonaws.com:5432/dbqjvtuibcp5iq', config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
*/
sequelize = new Sequelize('postgres://ettkuuldqtgzaj:a2f0588a8304882a9b55a20d1c09d7499b1a8d2a23281c8c883f4b4f3c38a64a@ec2-54-166-167-192.compute-1.amazonaws.com:5432/dbqjvtuibcp5iq', config);

db.User = User;
User.init(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
