import {Router} from 'express'
import {getUsers} from '../controllers/register.controller'

const router = Router();

router.route('/')
.get(getUsers)

export default router;