import con from '../repository/conection.js';

export async function inserirConsulta(consulta) {
    const comando = `
        INSERT INTO tb_agenda (motivo, especialidade, hospital, id_medico, id_hospital, data_consulta, hora)
        VALUES (?, ?, ?, ?, ?, ?,?)`
    ;

    const [resultado] = await con.query(comando, [
        consulta.motivo,
        consulta.especialidade,
        consulta.hospital,
        consulta.id_medico,
        consulta.id_hospital,
        consulta.data,
        consulta.hora
    ]);

    return resultado.insertId;
}

export async function listarConsultaPorId(id) {
    const comando = `
        SELECT
            a.id_consulta,
            a.motivo,
            a.especialidade,
            a.data_consulta,
            a.hora,
            m.nome AS medico,
            h.nome AS hospital
        FROM tb_agenda a
        INNER JOIN tb_medico m ON m.id_medico = a.id_medico
        INNER JOIN tb_hospital h ON h.id_hospital = a.id_hospital
        WHERE a.id_consulta = ?`
    ;

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}