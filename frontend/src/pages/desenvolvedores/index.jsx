import './index.scss'
import { Link } from 'react-router-dom';

export default function Desenvolvedores() {
  return (
    <>
      <header className="dev-cabecalho">
        <div className="logo-dev-cabecalho">
          <Link to={"/inicio"}>
            <img src="/logoDEV.webp" alt="desenvolvedores" className="logo-cabecalho-dev" />
          </Link>
        </div>

        <nav className="nav-dev-cabecalho">
          <a href="contato">Contato</a>
          <a href="">Home</a>
          <a href="sobre">Sobre Nós</a>
        </nav>
      </header>

      <section className="servicos">
        <h2>Serviços</h2>

        <div className="cards-servicos">
          <div className="card">
            <img src="/ftcode.webp" alt="Web Sites" />
            <h3>Web Sites</h3>
            <p>Trabalhamos com o desenvolvimento de Sites Web.</p>
          </div>

          <div className="card">
            <img src="/iarob.webp" alt="Inteligência Artificial" />
            <h3>Inteligência Artificial</h3>
            <p>Estamos nos especializando cada vez mais nessa tecnologia.</p>
          </div>

          <div className="card">
            <img src="/bpm.webp" alt="BPM" />
            <h3>BPM</h3>
            <p>Buscamos reconhecer e desenvolver o melhor pra você!</p>
          </div>
        </div>

        {/* 🌊 Onda no final da seção */}
        <div className="onda-abaixo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#153F4A"
              fillOpacity="1"
              d="M0,192L60,181.3C120,171,240,149,360,154.7C480,160,600,192,720,186.7C840,181,960,139,1080,138.7C1200,139,1320,181,1380,202.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            ></path>
          </svg>
        </div>
      </section>
    </>
  );
}
