const helpers = {};

const users = [
  { id: 1, name: "Bob", password: "1234" },
  { id: 2, name: "Pequeno Pollo", password: "pockpock" },
];

helpers.fetchAllUsers = () => {
  const parsedUsers = users.map((user) => ({ id: user.id, name: user.name }));

  return Promise.resolve(parsedUsers);
};

helpers.fetchUserById = async (userId) => {
  return users[userId];
};

module.exports = helpers;
