import conexao from "./connections.js";

export async function verificarLogin(email, senha) {
  try {
    const comando = `
      SELECT id_cliente
      FROM tb_cadastro_cliente
      WHERE ds_email = ? AND ds_senha = ?
    `;
    const [result] = await conexao.query(comando, [email, senha]);
    return result.length > 0 ? result[0].id_cliente : null;
  } catch (error) {
    console.error('Erro ao verificar as credenciais:', error);
    throw error;
  }
}

export async function verificarLogin(email,senha) {
  const comando = `
  SELECT id_cliente
  FROM tb_cadastro_cliente
  WHERE ds_email = ? AND ds_senha = ?
`;

  let [dados] = await conexao.query(comando,
    [
      '%' + email + '%',
      '%' + senha + '%'

    ])
  return dados;
}
