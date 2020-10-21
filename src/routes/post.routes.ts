import {Router} from 'express'
import {getUsers, createUser} from '../controllers/register.controller'

const router = Router();

router.route('/')
.get(getUsers)
.post(createUser);

export default router;