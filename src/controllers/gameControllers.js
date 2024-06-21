import gameModel from "../models/gameModel.js";

export const info = async (req, res) => {
  try {
    const game = await gameModel.find();
    res.status(200).json(game);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createGame = async (req, res) => {
  const prueba = {
    typesGame: req.params.typesGame,
    nameGame: req.params.nameGame,
    players: req.params.players,
    imageGame: req.params.imageGame,
  };
  const id = await gameModel.findOne(prueba);
  try {
    if (!id) {
      const newGame = new gameModel({
        typesGame: req.params.typesGame,
        nameGame: req.params.nameGame,
        players: req.params.players,
        imageGame: req.params.imageGame,
      });
      const result = await newGame.save();
      return res.status(200).json(result);
    } else {
      return res.status(404).json({ message: "el juego ya existe" });
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const deleteGame = async (req, res) => {
  const id = req.params.eliminarGame;
  const busqueda = await gameModel.findById(id);
  try {
    if (busqueda) {
      const DeleteGame = await gameModel.findByIdAndDelete(id);
      return res.status(200).json(DeleteGame);
    } else {
      return res
        .status(404)
        .json({ message: "el juego que quiere eliminar no existe" });
    }
  } catch (error) {
    return res.status(404).json(error);
  }
};

export const updateGame = async (req, res) => {
  const Game = await gameModel.findById(req.params.id);
  try {
    if (Game) {
      console.log(Game);
      const player = parseInt(req.params.Newplayers);
      Game.typesGame = req.params.NewtypesGame;
      Game.nameGame = req.params.NewnameGame;
      Game.players = player;
      Game.imageGame = req.params.NewimageGame;
      await Game.save();
      console.log(Game);
      return res.status(200).json(Game);
    } else {
      return res.status(404).send("El usuario no fue encontrado.");
    }
  } catch (error) {
    res.status(404).send(error);
  }
};
