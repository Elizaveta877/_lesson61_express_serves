exports.getAllUsers = (req, res) => res.send("Get users router");
exports.createUser = (req, res) => res.send("Post users router");
exports.getUserById = (req, res) => res.json({
  message: `Get user by id router: ${req.params.usersId}`
});
exports.updateUser = (req, res) => res.json({
  message: `Update user by id router: ${req.params.usersId}`
});
exports.deleteUser = (req, res) => res.json({
  message: `Delete user by id router: ${req.params.usersId}`
});
