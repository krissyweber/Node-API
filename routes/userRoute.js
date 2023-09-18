const express = require('express');
const userController = require('../controllers/userController');
const {getUserById, createUser, getAllUsers, updateUser, deleteUser} = require('../controllers/userController')

const router = new express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
