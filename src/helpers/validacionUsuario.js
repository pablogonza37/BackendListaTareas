import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionesUsuario = [
  check("nombreUsuario")
    .notEmpty()
    .withMessage("El nombre de usuario es un dato obligatorio")
    .isLength({ min: 3, max: 20 })
    .withMessage("El nombre del usuario debe tener entre 3 y 20 caracteres"),
  check("email")
    .notEmpty()
    .withMessage("El email es un dato obligatorio")
    .matches(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i)
    .withMessage(
      "El email debe ser un formato valido"
    ),
  check("contrasenia")
    .notEmpty()
    .withMessage("El password es un dato obligatorio"),
  check("rol"),
    check("tarea"),
    
  (req, res, next) => {
    resultadoValidacion(req, res, next);
  },
];

export default validacionesUsuario;