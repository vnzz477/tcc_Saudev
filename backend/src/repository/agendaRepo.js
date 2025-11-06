import con from './conection.js';
    
export async function inserirConsulta(consulta) {
    const comando = `
  INSERT INTO tb_agenda (motivo, especialidade, id_medico, id_hospital, id_usuario, data_consulta, hora)
  VALUES (?, ?, ?, ?, ?, ?, ?)
`;

const [resultado] = await con.query(comando, [
  consulta.motivo,
  consulta.especialidade,
  consulta.id_medico,
  consulta.id_hospital,
  consulta.id_usuario,
  consulta.data,
  consulta.hora
]);


    return resultado.insertId;
}
