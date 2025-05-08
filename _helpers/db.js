const config = require('../config');
const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    // Use destructuring to get database config values cleanly
    const { host, port, user, password, database } = config.database;
    
    // Ensure essential DB config is present (optional but recommended)
    if (!host || !port || !user || !database) {
        console.error("FATAL ERROR: Missing database configuration in environment variables or config/index.js.");
        // Password might be intentionally empty for some local setups, but usually required.
        // Add check for password if it's always required: !password
        process.exit(1);
    }

    // create db if it doesn't already exist using config values
    const connection = await mysql.createConnection({ host, port, user, password });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
    await connection.end(); // Close the initial connection used just for DB creation

    // connect to db using config values
    const sequelize = new Sequelize(
        database,
        user,
        password, // Password comes from config
        {
           host: host,
           port: port, // Use the port from config (already parsed)
           dialect: 'mysql',
           logging: false // Optional: disable sequelize logging if too verbose
           // Add other sequelize options if needed
        }
       );

    // init models and add them to the exported db object
    db.Account = require('../accounts/account.model')(sequelize);
    db.RefreshToken = require('../accounts/refresh-token.model')(sequelize);
    db.Employee = require('../employees/employee.model')(sequelize);
    db.Department = require('../departments/department.model')(sequelize);
    db.Workflow = require('../workflows/workflow.model')(sequelize);

    // define relationships
    db.Account.hasMany(db.RefreshToken, { onDelete: 'CASCADE' });
    db.RefreshToken.belongsTo(db.Account);

    // Define Account <-> Employee Relationship (One-to-One)
    db.Account.hasOne(db.Employee, { foreignKey: 'userId', as: 'employee' });
    db.Employee.belongsTo(db.Account, { foreignKey: 'userId', as: 'user' });

    // Define Department <-> Employee Relationship (One-to-Many)
    db.Department.hasMany(db.Employee, { foreignKey: 'departmentId', as: 'employees' });
    db.Employee.belongsTo(db.Department, { foreignKey: 'departmentId', as: 'department' });

    // Define Employee <-> Workflow Relationship (One-to-Many)
    db.Employee.hasMany(db.Workflow, { foreignKey: 'employeeId', as: 'workflows' });
    db.Workflow.belongsTo(db.Employee, { foreignKey: 'employeeId', as: 'employee' });

    // sync all models with database
    // Consider using migrations for production instead of sync({ alter: true })
    // sync({ alter: false }) is safer but won't update existing tables
    await sequelize.sync({ alter: false });

    console.log('Database synchronized successfully.'); // Add confirmation log
}