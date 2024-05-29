const {Schema,model} = require('mongoose');

const gameModel= new Schema({
  typesGame :{
    type: String,
    required: true
  },
  nameGame:{
    type: String,
    required: true
  },
  players:{
    type: Number,
    default : 0
  },
  imageGame:{
    type: string,
    required: true
  }
})

module.exports = model('gameModel',gameModel)