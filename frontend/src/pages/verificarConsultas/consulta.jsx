import { useState } from "react";
import api from "../../api";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import Rodape from "../../components/rodape/rodape";
import "./consulta.scss";

export default function ListaConsultas() {
  const [consultas, setConsultas] = useState([]);
  const [motivo, setMotivo] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [medico, setMedico] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [hospital, setHospital] = useState("");


  async function carregarConsultas() {
    try {
      const id_usuario = localStorage.getItem("ID_USUARIO");
      const resp = await api.get(`/consulta/${id_usuario}`);
  
      const lista = resp.data;
      setConsultas(lista);
  

      if (lista.length > 0) {
        const consulta = lista[0];
        setMotivo(consulta.motivo);
        setEspecialidade(consulta.especialidade);
        setMedico(consulta.medico);
        setData(consulta.data_consulta);
        setHora(consulta.hora);
        setHospital(consulta.hospital);
      }
    } catch (err) {
      alert("Erro ao carregar consultas: " + err.message);
    }
  }



  function formatarData(dataISO) {
    if (!dataISO) return ""; 
    const data = new Date(dataISO);
    return data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  }


  function formatarHora(horaStr) {
    if (!horaStr) return "";
    return horaStr.slice(0, 5);
  }




  return (
    <div className="pagina-consultas">
      <Cabecalho />


      <div className="area-principal">
        <img src="/medico-consulta.webp" alt="Médico" className="imagem-medico"/>



        <div className="card-consulta">
          <h2>Consultas do Cliente</h2>
          <p>
            Aqui estão todas as suas consultas marcadas, <br />
            por meio da nossa empresa.
          </p>

          <div className="formulario-consulta">
            <input placeholder="Motivo da consulta" value={motivo} onChange={(e) => setMotivo(e.target.value)} />


            <div className="linha">
              <input placeholder="Especialidade" value={especialidade} onChange={(e) => setEspecialidade(e.target.value)}/>

              <input placeholder="Médico" value={medico} onChange={(e) => setMedico(e.target.value)}/>
            </div>


            <div className="linha">
              <input value={data} onChange={(e) => setData(e.target.value)} />
              <input value={hora} onChange={(e) => setHora(e.target.value)} />
            </div>


            <input
              placeholder="Hospital da consulta"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
            />
          </div>


          <button onClick={carregarConsultas} className="botao-verificar">
            Verificar
          </button>
        </div>
      </div>


      {consultas.length > 0 && (
        <div className="tabela-consultas">
          <h3>Sua Consultas Marcadas</h3>
          <table>
            <thead>
              <tr>
                <th>Motivo</th>
                <th>Especialidade</th>
                <th>Médico</th>
                <th>Data</th>
                <th>Hora</th>
                <th>Hospital</th>
              </tr>
            </thead>
            <tbody>
              {consultas.map((item) => (
                <tr key={item.id_consulta}>
                  <td>{item.motivo}</td>
                  <td>{item.especialidade}</td>
                  <td>{item.medico}</td>
                  <td>{formatarData(item.data_consulta)}</td>
                  <td>{formatarHora(item.hora)}</td>
                  <td>{item.hospital}</td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      )}

      <Rodape />
    </div>
  );
}
