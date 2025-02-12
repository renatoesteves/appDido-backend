"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = isAuthenticated;
const jsonwebtoken_1 = require("jsonwebtoken");
function isAuthenticated(req, res, next) {
    //Receber o Token 
    const authToken = req.headers.authorization;
    if (!authToken) {
        res.status(401).end();
    }
    const [, token] = authToken.split(" ");
    try {
        //Validar o token 
        const { sub } = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
        //Recuperar o ID do token e colocar dentro de uma variavel user_id dentro do req(Request)
        req.user_id = sub;
        next();
    }
    catch (_a) {
        res.status(401).end();
    }
}
