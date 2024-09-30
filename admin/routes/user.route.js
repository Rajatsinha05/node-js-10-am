
const { Router } = require('express');
const { getUser, createUser, deleteUser, accountVerification } = require('../controllers/User.controller');

const router = Router()
router.get('/', getUser)
router.post("/", createUser)
router.delete('/:id', deleteUser)
router.get("/verify/:id/:otp",accountVerification )


module.exports={userRouter:router}