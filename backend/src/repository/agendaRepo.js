import con from './conection.js';


export async function inserirConsulta(consulta) {
 
  const comandoVerifica = `
    SELECT *
    FROM tb_agenda
    WHERE id_medico = ?
      AND data_consulta = ?
      AND ABS(TIMESTAMPDIFF(MINUTE, hora, ?)) < 30
  `;

  const [consultasExistentes] = await con.query(comandoVerifica, [
    consulta.id_medico,
    consulta.data,
    consulta.hora,
  ]);

  if (consultasExistentes.length > 0) {
    throw new Error('O médico já possui uma consulta neste horário ou dentro de 30 minutos.');
  }


  const comando = `
    INSERT INTO tb_agenda 
      (motivo, especialidade, id_medico, id_hospital, id_usuario, data_consulta, hora)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const [resultado] = await con.query(comando, [
    consulta.motivo,
    consulta.especialidade,
    consulta.id_medico,
    consulta.id_hospital,
    consulta.id_usuario,
    consulta.data,
    consulta.hora,
  ]);

  return resultado.insertId;
}
