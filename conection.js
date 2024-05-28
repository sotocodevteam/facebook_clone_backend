import mongoose from 'mongoose';

const connectdb = () =>{
  mongoose.connect('mongodb://localhost:27017/facebookclone')
  .then(db => console.log('Base de Datos Conectada'))
  .catch(err => console.log(err));
}
export default connectdb;