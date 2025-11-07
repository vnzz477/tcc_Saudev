import Cabecalho2 from "../../components/cabecalho2/cabecalho2";
import { Link } from "react-router-dom";
import Rodape from "../../components/rodape/rodape";
import './sobre2.scss';

export default function Sobre2() {
    return (
        <div className="sobre2-container">
            <Cabecalho2 />

            <section className="sobre2-consulta">
                <div className="sobre2-logo">
                    <img src="/medicos.png" alt="Médica" className="sobre2-hero-img" />
                </div>

                <div className="sobre2-agenda">
                    <h1>Sobre Nós</h1>
                    <p>
                        No Saúde com Você, acreditamos que cuidar da saúde não precisa ser complicado.
                        Nascemos com o propósito de aproximar você do atendimento médico de forma rápida,
                        acessível e humanizada. Aqui, cada consulta é muito mais do que um atendimento:
                        é atenção, confiança e cuidado de verdade. Contamos com profissionais qualificados,
                        tecnologia a favor da saúde e um compromisso: colocar você no centro de tudo.
                    </p>
                    <Link to="/login" className="botao-sobre2">Cadastrar-se</Link>
                </div>
            </section>




            <section className="sobre2-saude">
                <div className="sobre2-conteudo">
                    <h3>
                        A experiência dos Clientes com <br />
                        Saúde com Você
                    </h3>

                    <div className="sobre2-grid">
                        <div className="sobre2-card">
                            <img src="/feliz2.webp" alt="Cliente feliz" />
                        </div>

                        <div className="sobre2-card">
                            <p>
                                A plataforma é excelente! Pude escolher o especialista que queria,
                                ver avaliações de outros pacientes e marcar a consulta em menos de cinco minutos.
                                Gostei muito da organização e do suporte oferecido.
                            </p>
                            <div className="stars">★★★★★</div>
                            <span className="data">23 de Abril de 2025</span>
                        </div>

                        <div className="sobre2-card">
                            <p>
                                Um excelente site para marcar suas consultas,
                                muito sastifeita por ser básico e simples de utilizar.
                                Marquei a minha consulta e foi muito facil e não tive nem duvidas da onde ir.
                            </p>
                            <div className="stars">★★★★★</div>
                            <span className="data">29 de Agosto de 2025</span>
                        </div>

                        <div className="sobre2-card">
                            <p>
                                Um serviço incrível que realmente facilita nossa vida.
                                Tudo é bem explicado e seguro. Me senti confiante em usar e o atendimento médico foi impecável.
                                É ótimo ver tecnologia sendo usada para cuidar de pessoas!
                            </p>
                            <div className="stars">★★★★★</div>
                            <span className="data">17 de Março de 2025</span>
                        </div>
                    </div>
                </div>
            </section>

            <Rodape />
        </div>
    );
}
