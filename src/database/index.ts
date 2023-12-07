const Sequelize = require('sequelize');
const config = require(__dirname + '/config/config.js');
import User from './models/user';
const db: any = {};
let sequelize: any;

sequelize = new Sequelize(config);

db.models    = {
  User: User(sequelize),
};


db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
