const router = require('express').Router();
const {
  getUsers,
  getUser,
  updateUser,
  updatePassword,
  deleteUser,
} = require('../../controllers/v1/userController');
const { protect } = require('../../middlewares/v1/authMiddleware');
const { adminProtect } = require('../../middlewares/v1/adminMiddleware');

router.route('/')
  .get(protect, adminProtect, getUsers);

router.route('/:id')
  .get(protect, getUser)
  .put(protect, updateUser)
  .delete(protect, adminProtect, deleteUser);

router.route('/:id/password')
  .put(protect, updatePassword);

module.exports = router;
