exports.getAllUsers = (req, res) => res.send("Get users router");
exports.createUser = (req, res) => res.send("Post users router");
exports.getUserById = (req, res) => res.send(`Get user by id router: ${req.params.id}`);
exports.updateUser = (req, res) => res.send(`Update user by id router: ${req.params.id}`);
exports.deleteUser = (req, res) => res.send(`Delete user by id router: ${req.params.id}`);
