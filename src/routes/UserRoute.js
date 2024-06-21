import { Router } from "express";
import {getAllUser, getUser, createUser, updateUser, deleteUser} from '../controllers/userController.js';

const route = Router()

route.route('/').get(getAllUser).post(createUser)

route.route('/:id').get(getUser).put(updateUser).delete(deleteUser);


export default route;