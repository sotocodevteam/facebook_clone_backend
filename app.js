import express from "express";
import cors from "cors";
import UserRoute from "./src/routes/UserRoute.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", UserRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server iniciado exitosamente en http://localhost:${PORT}/`);
});
