import express from 'express';
import {info,createGame,deleteGame,updateGame} from '../controllers/gameControllers.js'
const route = express.Router()

route.get('/',info);
route.post('/newGame/:typesGame/:nameGame/:players/:imageGame',createGame);
route.delete('/deleteGame/:eliminarGame',deleteGame);
route.put('/updateGame/:id/:NewtypesGame/:NewnameGame/:Newplayers/:NewimageGame',updateGame);
export default route;