import express from "express";
import cors from "cors";
import UserRoute from "./src/routes/UserRoute.js";
import connectdb from "./conection.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", UserRoute);

//Conectando base de datos.
connectdb();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server iniciado exitosamente en http://localhost:${PORT}/`);
});
