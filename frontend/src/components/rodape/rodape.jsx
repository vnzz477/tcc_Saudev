import './rodape.scss';
import { Link } from 'react-router-dom';

export default function Rodape() {
  return (
    <footer>
      <div className="container-rodape">

        <div className="coluna-principal">
          <div className="logtitulo">
            <img
              src="/rodapelogo.png"
              alt="Saúde com Você"
              className="logo-rodape"
            />
            <h1 className="titulo-rodape">SAÚDE COM VOCÊ</h1>
          </div>

          <h2 className="slogan">
            Porque saúde agora é<br />Saúde com Você
          </h2>

          <h3 className="redes-sociais">Siga nossas redes:</h3>
          <div className="icones">
           <a href="https://www.instagram.com/tcc_saude2025?igsh=ejIzMTE1YjNlczA1" target="_blank" rel="noopener noreferrer">
            <img src='insta.webp' alt='Instagram' />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61583487154525">
            <img src='prc3.png' alt='Facebook' />
            </a>
            <a href="https://www.linkedin.com/in/sa%C3%BAde-com-vc-851a42398/" target="_blank" rel="noopener noreferrer">
            <img src='linkdin.webp' alt='LinkedIn' />
            </a>
          </div>
        </div>


        <div className="colunas-links">

          <div className="coluna">
            <h1>Empresarial</h1>
            <div className="links">
              <Link to="/sobre">Quem Somos</Link>
              <Link to="/dev">Trabalhe Conosco</Link>
              <Link to="/TermodeUso">Termos de Uso</Link>
              <Link to="/PoliticaPrivacidade">Política de Privacidade</Link>
            </div>
          </div>

          <div className="coluna">
            <h1>Outros</h1>
            <div className="links">
              <Link to="/blogs">Blog</Link>
              <Link to="/agenda">Hospitais Parceiros</Link>
            </div>
          </div>

          <div className="coluna">
            <h1>Portal de Atendimento</h1>
            <div className="links">
              <Link to="/atendimento">Atendimento ao Cliente</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}