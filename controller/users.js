const User = require('../model/users');

const getUsers = async (req, res) => {
  const where = req.query || {};
  const users = await User.findAll({ where });
  res.send(users);
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.query);
    res.send('New user created successfully');
  } catch (error) {
    res.send(`Oops, something went wrong: ${error}`);
  }
};

const updateUser = async (req, res) => {
  const username = req.query.username;
  try {
    const user = await User.findOne({ where: { username } });
    user.set(req.query);
    user.save();
    res.send(`${username} was successfully updated`);
  } catch (error) {
    res.send(`Oops, something went wrong: ${error}`);
  }
};

const deleteUser = async (req, res) => {
  const username = req.query.username;
  try {
    const user = await User.findOne({ where: { username } });
    user.destroy();
    res.send(`${username} was successfully deleted`);
  } catch (error) {
    res.send(`Oops, something went wrong: ${error}`);
  }
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
