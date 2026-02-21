const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:usersId', userController.getUserById);
router.put('/:usersId', userController.updateUser);
router.delete('/:usersId', userController.deleteUser);

module.exports = router;
