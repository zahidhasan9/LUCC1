
const { getUsers, addUser, getUserById, editUser, deleteUser } = require ("../controller/admin/userCurd");

const router = require("express").Router();

router.get('/alluser', getUsers);
router.post('/add', addUser);
router.get('/:id', getUserById);
router.put('/edit/:id', editUser);
router.delete('/:id', deleteUser);

module.exports = router;