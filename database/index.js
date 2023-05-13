const database = require('./db');

const syncDatabase = async () => {
  try {
    await database.sync();
  } catch (error) {
    console.error('Unable to sync to the database:', error);
  }
};

module.exports = syncDatabase;
