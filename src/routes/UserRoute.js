import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
    return res.status(200).json({
        ok: true,
        message: "Hola ruta",
    });
});

export default route;
