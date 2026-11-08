
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import Rodape from "../../components/rodape/rodape";
import "./Inicio.scss";

const beneficios = [
  {
    imagem: "/imgcard.png",
    titulo: "Atendimento qualificado",
    descricao:
      "Encontre profissionais de diferentes especialidades para cuidar da sua saúde.",
  },
  {
    imagem: "/imgcard1.png",
    titulo: "Praticidade",
    descricao:
      "Consulte as opções disponíveis e organize seu agendamento em poucos passos.",
  },
  {
    imagem: "/imgcard2.png",
    titulo: "Cuidado contínuo",
    descricao:
      "Facilite o planejamento de suas consultas e acompanhamentos.",
  },
  {
    imagem: "/imgcard3.png",
    titulo: "Agendamento online",
    descricao:
      "Escolha as informações da consulta diretamente pela plataforma.",
  },
];

export default function Inicio() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");

    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="inicio-container">
      <Cabecalho />

      <main>
        <section className="main-consulta">
          <div className="main-agenda">
            <span className="hero-etiqueta">
              SAÚDE COM VOCÊ
            </span>

            <h1>
              Sua saúde merece
              <span> atenção especial.</span>
            </h1>

            <p>
              Agende suas consultas de forma simples
              e prática. Uma plataforma pensada para
              aproximar você dos cuidados que precisa.
            </p>

            <div className="hero-acoes">
              <a
                href="/agenda"
                className="btn-agendar-main"
              >
                Agendar consulta
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="hero-destaque">
              <span className="destaque-icone">✓</span>
              Agendamento online simples e prático
            </div>
          </div>

          <div className="main-logo">
            <div className="hero-imagem-fundo">
              <img
                src="/medica2.png"
                alt="Profissional de saúde"
                className="main-hero-img"
              />
            </div>
          </div>
        </section>

        <section className="qualidade-saude">
          <div className="qualidade-conteudo">
            <span className="secao-etiqueta">
              NOSSOS BENEFÍCIOS
            </span>

            <h2>
              Mais facilidade para cuidar
              <span> da sua saúde</span>
            </h2>

            <p className="qualidade-descricao">
              Uma experiência organizada para você
              encontrar informações e agendar suas
              consultas com tranquilidade.
            </p>

            <div className="qualidade-grid">
              <div className="qualidade-imagem">
                <img
                  src="/ulta.jpeg"
                  alt="Atendimento de saúde"
                />
              </div>

              <div className="qualidade-cards">
                {beneficios.map((beneficio) => (
                  <article
                    className="beneficio-card"
                    key={beneficio.titulo}
                  >
                    <div className="beneficio-icone">
                      <img
                        src={beneficio.imagem}
                        alt=""
                      />
                    </div>

                    <h3>{beneficio.titulo}</h3>
                    <p>{beneficio.descricao}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}
