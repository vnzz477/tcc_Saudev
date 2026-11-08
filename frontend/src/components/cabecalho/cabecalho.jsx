import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./cabecalho.scss";

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();

  function sair() {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("USUARIO");
    localStorage.removeItem("ID_USUARIO");
    navigate("/");
  }

  return (
    <header className="header-cabecalho">
      <div className="logo-area-cabecalho">
        <Link to={'/inicio'}>
        <img src="/logo.png" alt="Saúde com Você" className="logo-cabecalho" />
        </Link>
        <h1>SAÚDE COM VOCÊ</h1>
      </div>

      <nav className="nav-cabecalho">
        <a href="/blogs">Blogs</a>
        <a href="/inicio">Início</a>
        <a href="/sobre">Sobre Nós</a>
      </nav>

      <button
        type="button"
        aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        aria-expanded={menuAberto}
        className={`menu-icone ${menuAberto ? "ativo" : ""}`}
        onClick={() => setMenuAberto(!menuAberto)}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      {menuAberto && (
        <div className="menu-suspenso">
          <a href="/consulta" className="menu-link">Minhas consultas</a>
          <a href="/dev" className="menu-link">Desenvolvedores</a>
            <button onClick={sair}>Sair</button>
        </div>
      )}
    </header>
  );
}
