import './dev.scss';
import { Link } from 'react-router-dom';

export default function Desenvolvedores() {
  return (
    <>
 <header className="front-header">
      <div className="logo-area">
        <Link to="/inicio"> 
        <img src="logotome.webp" alt="DreamCoders Logo" className="logo-img" />
        </Link>
      </div>

      <nav className="nav-links">
        <a href="#">Contato</a>
        <a href="#">Home</a>
        <a href="#">Sobre Nós</a>
      </nav>
    </header>
        <section className="front-servicos">
          <h2>Serviços</h2>
          <div className="front-servicos-container">
            <div className="front-card">

              <h3>Web Sites</h3>
              <p>Trabalhamos com o <br /> desenvolvimento de Sites  Web .</p>
              <img src="code.webp" alt="Web Sites" />

            </div>

            <div className="front-card">

              <h3>Inteligência Artificial</h3>
              <p>Estamos nos especializando cada vez <br /> mais no assunto dessa nova tecnologia. </p>
              <img src="roboia.webp" alt="Inteligência Artificial" />

            </div>

            <div className="front-card">

              <h3>Inteligência Artificial</h3>
              <p>Aplicamos IA para automação e soluções inteligentes.</p>
              <img src="bpm.webp" alt="BPM" />

            </div>
          </div>
        </section>

        <section className="front-historia">
          <h2>Nossa História</h2>
          <p>
            Fundada em 2025, a empresa nasceu do entusiasmo por tecnologia e pela <br />
            busca constante por inovação. Desde o início, nossa missão tem sido <br />
            transformar ideias em soluções digitais eficientes, combinando
            criatividade, <br /> técnica e estratégia.
          </p>
          <p>
            Ao longo do tempo, nossa equipe tem se dedicado a oferecer serviços
            sob <br />  medida, projetados para atender às necessidades específicas de
            cada cliente, <br /> sempre com foco em qualidade, performance e resultados.
          </p>
          <p>
            Com uma base sólida em conhecimento técnico e um olhar atento às <br />
            tendências do mercado, construímos uma trajetória marcada pela
            excelência, <br /> comprometimento e confiança. Hoje, somos reconhecidos como
            uma <br /> referência em soluções tecnológicas inteligentes, impulsionando o
            crescimento <br /> de empresas que acreditam no poder da inovação.
          </p>
        </section>

        <section className="front-especial">
          <h2>
            O que torna os <span>DreamCoders</span> especiais?
          </h2>

          <h3>Inovação e Criatividade</h3>
          <p>
            Na DreamCoders, cada desafio é uma oportunidade para criar algo novo.
            Nossos <br /> desenvolvedores pensam além do código, buscando constantemente
            soluções <br /> criativas que transformam ideias em experiências digitais
            únicas.
          </p>

          <h3>Comprometimento com o Cliente</h3>
          <p>
            Cada projeto é tratado com dedicação e atenção aos detalhes.
            Entendemos as <br /> necessidades de cada cliente e trabalhamos lado a lado
            para entregar resultados <br /> que superam expectativas, unindo performance,
            design e funcionalidade.
          </p>
        </section>

        <section className="front-devs">
          <h2>Conheça nossos Desenvolvedores!</h2>

          <div className="dev-card">
            <div className="dev-info">
              <h3>Vinícius Freire</h3>
              <p className="cargo">Web Designer e Desenvolvedor Fullstack</p>
              <p className="descricao">
                Olá! Sou o Vinicius Freire, desenvolvedor Fullstack na
                DreamCoders. Minha paixão é transformar ideias em soluções digitais
                completas — unindo design, código e propósito. Acredito que a
                tecnologia é uma ponte poderosa entre pessoas e experiências, e meu
                objetivo é construir aplicações que sejam funcionais, rápidas e
                visualmente impactantes. Com experiência em front-end e back-end,
                busco sempre entregar produtos escaláveis, seguros e modernos,
                mantendo a harmonia entre estética e desempenho. Na DreamCoders,
                aplico minha visão criativa e técnica para desenvolver sistemas e
                interfaces que traduzem a essência de cada projeto, conectando
                inovação com resultados reais. Sou movido pelo desafio de criar
                soluções inteligentes e elegantes, que facilitem o dia a dia dos
                usuários e expressem o verdadeiro potencial da tecnologia.
              </p>
            </div>
            <img src="vin.webp" alt="Vinícius Freire" />
          </div>

          <div className="dev-card">
            <div className="dev-info">
              <h3>Davi Diniz</h3>
              <p className="cargo">Web Designer e Desenvolvedor Front-end</p>
              <p className="descricao">
                Olá! Sou o Davi, um dos desenvolvedores da DreamCoders, onde atuo
                na criação e desenvolvimento de interfaces web modernas e
                funcionais. Minha missão é transformar ideias em experiências
                digitais envolventes, unindo estética, usabilidade e tecnologia.
                Com um olhar atento ao design e à experiência do usuário, busco
                criar soluções que sejam visualmente atraentes e intuitivas. Tenho
                paixão por transformar conceitos em projetos reais, utilizando as
                mais recentes tecnologias front-end para entregar produtos de alta
                performance e fácil navegação. Na DreamCoders, aplico meu
                conhecimento e criatividade para desenvolver sites e aplicações que
                refletem a identidade de cada cliente, sempre com foco em resultados
                e excelência visual. Acredito que um bom design é aquele que
                comunica, inspira e facilita a vida das pessoas.
              </p>
            </div>
            <img src="diniz.webp" alt="Davi Diniz" />
          </div>

          <div className="dev-card destaque">
            <div className="dev-info">
              <h3>Sérgio Romalho</h3>
              <p className="cargo">Desenvolvedor Fullstack</p>
              <p className="descricao">
                Olá! Sou o Sérgio, desenvolvedor Full Stack na DreamCoders, responsável por criar soluções web completas, seguras e dinâmicas. Meu objetivo é transformar ideias em plataformas digitais eficientes, combinando performance, design e inovação.
                Com experiência em front-end e back-end, procuro desenvolver aplicações que unam boa arquitetura, usabilidade e visual moderno. Tenho entusiasmo por transformar conceitos em produtos funcionais, aplicando as melhores práticas e tecnologias atuais do desenvolvimento web.
                Na DreamCoders, utilizo meu conhecimento técnico e visão criativa para construir sistemas que expressem a identidade de cada projeto. Busco sempre entregar resultados sólidos, experiências fluidas e soluções que realmente agreguem valor para o usuário.
              </p>
            </div>
            <img src="sergio2.webp" alt="Sérgio Romalho" />
          </div>

          <div className="dev-card">
            <div className="dev-info">
              <h3>Arthur Lima</h3>
              <p className="cargo">Desenvolvedor Front-end</p>
              <p className="descricao">
                Olá, sou Arthur, desenvolvedor Front-End na DreamCoders. Atuo na
                criação e implementação de interfaces web modernas, responsivas e
                de alta performance. Meu trabalho consiste em transformar conceitos
                e propostas em soluções digitais funcionais, elegantes e centradas
                na experiência do usuário. Com foco em usabilidade, estética e
                eficiência, aplico meus conhecimentos em desenvolvimento front-end
                para construir interfaces intuitivas, harmônicas e tecnicamente
                sólidas. Comprometo-me a entregar produtos digitais que unam design
                refinado e funcionalidade de forma impecável.
              </p>
            </div>
            <img src="ig.webp" alt="Arthur Lima" />
          </div>

          <div className="dev-card">
            <div className="dev-info">
              <h3>João Vitor</h3>
              <p className="cargo">Web Designer e Desenvolvedor Front-end</p>
              <p className="descricao">
                Olá! Sou João Vitor, desenvolvedor e web designer na DreamCoders. Meu trabalho é transformar ideias em projetos digitais completos, criando interfaces claras, fluidas e visualmente marcantes. Acredito que cada conceito carrega uma história e busco traduzi-la para o universo digital de maneira simples, objetiva e impactante.
                Na DreamCoders, coloco em prática minha criatividade e visão técnica para desenvolver sites e aplicações que realmente conectam pessoas e ideias. Cada detalhe importa cores, ritmo visual, estrutura tudo contribui para que o resultado final seja intuitivo, eficiente e envolvente. Estou sempre em busca de entregar valor, qualidade e experiências digitais que inspiram e facilitam o dia a dia.
              </p>
            </div>
            <img src="joao.webp" alt="João Vitor" />
          </div>
        </section>

        <section className="front-contato">
          <h2>Contato</h2>
          <p>
            Estamos prontos para ajudar você a dar o próximo passo na sua jornada
            digital! <br /> Entre em contato com a DreamCoders pelos canais abaixo:
          </p>

          <ul>
            <li>
              <strong>Telefone/WhatsApp:</strong> (11) 91690-5383
            </li>
            <li>
              <strong>E-mail:</strong> TTC_SAÙDE@gmail.com
            </li>
            <li>
              <strong>Horário de Atendimento:</strong> Segunda a Sexta, das 9h às
              18h
            </li>
          </ul>
        </section>

        <footer className='front-footer'>
          <p>© 2025 DreamCoders. Todos os direitos reservados. </p>
          <div className="footer-logo">
          <img src="logotome.webp" alt="" />
          </div>
        </footer>


      
    </>

  );


}


