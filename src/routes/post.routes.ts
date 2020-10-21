import {Router} from 'express'
import {getUsers, createUser, getUser, deleteUser} from '../controllers/register.controller'

const router = Router();

router.route('/')
.get(getUsers)
.post(createUser);

router.route('/:postId')
.get(getUser)
.delete(deleteUser);

export default router;