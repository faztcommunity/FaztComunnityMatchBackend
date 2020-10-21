import {Router} from 'express'
import {getUsers, createUser, getUser} from '../controllers/register.controller'

const router = Router();

router.route('/')
.get(getUsers)
.post(createUser);

router.route('/:postId')
.get(getUser)

export default router;