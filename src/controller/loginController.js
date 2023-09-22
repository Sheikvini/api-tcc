import { Router, json } from "express";
import { verificarLogin } from "../repository/loginRepositoy.js";

const endpoints = Router();
endpoints.use(json());

endpoints.post('/login', async (req, resp) => {
  try {
    const { email, senha } = req.body;
    const credencial = await verificarLogin(email, senha);
    
    if (credencial) {
      resp.status(200).json({ message: 'Login bem-sucedido' });
    } else {
      resp.status(401).json({ error: 'Credenciais inválidas' });
    }
  } catch (error) {
    resp.status(500).json({ error: 'Erro ao verificar as credenciais' });
  }
});

export default endpoints;
