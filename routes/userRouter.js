const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { basicAuth, validateUserInput } = require('../middleware/authMiddleware');

router.get('/', basicAuth, userController.getAllUsers);
router.post('/', basicAuth, validateUserInput, userController.createUser);
router.get('/:usersId', basicAuth, userController.getUserById);
router.put('/:usersId', basicAuth, userController.updateUser);
router.delete('/:usersId', basicAuth, userController.deleteUser);

module.exports = router;
