import con from './conection.js';

export async function listarConsultasPorUsuario(idUsuario) {
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
        WHERE a.id_usuario = ?
        ORDER BY a.data_consulta, a.hora
    `;

    const [linhas] = await con.query(comando, [idUsuario]);
    return linhas;
}
