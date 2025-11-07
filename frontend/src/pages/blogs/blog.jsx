import Cabecalho from "../../components/cabecalho/Cabecalho";
import Rodape from "../../components/rodape/rodape";
import "./blog.scss";

export default function Blog() {
  return (
    <div className="blog-container-geral">
      <Cabecalho />

      <main className="blog-container">
        <section className="intro alimentacao">
          <h2 className="titulo-blog">NOSSO BLOG</h2>
          <div className="it">
            <h3 className="subtitulo-blog alimentacao-title">Alimentação</h3>
          </div>
        </section>

        <section className="post verde">
          <img
            src="/public/alimentacao-saudavel-dia-dia.webp"
            alt="Comida saudável"
          />
          <div className="post-content">
            <p>
              Adotar uma alimentação saudável no dia a dia não significa fazer
              dietas restritivas, mas sim criar hábitos conscientes e
              equilibrados. Incluir mais frutas, verduras, legumes e alimentos
              naturais nas refeições, manter-se hidratado e reduzir o consumo de
              ultraprocessados são passos simples que fortalecem o corpo,
              aumentam a energia e melhoram o bem-estar físico e mental.
            </p>
          </div>
        </section>

        <section className="post azul">
          <img
            src="/public/probioticos-o-que-sao-e-seus-beneficios-para-a-saude-intestinal-510x392.webp"
            alt="Probióticos"
          />
          <div className="post-content">
            <h3>
              Entenda o que são probióticos e seus benefícios para a saúde
              intestinal
            </h3>
            <p>
            Probióticos são microrganismos que habitam nosso sistema digestivo e fazem parte do nosso microbioma intestinal. Sejam fungos ou bactérias, eles desempenham um papel importante na conservação da saúde do intestino, mantendo e restaurando o seu equilíbrio natural.
            </p>
          </div>
        </section>

        <section className="post amarelo">
          <img src="/public/prato-colorido-refeicao.webp" alt="Prato colorido" />
          <div className="post-content">
            <h3>11 dicas imperdíveis para ter uma alimentação equilibrada</h3>
            <p>
              Mas afinal, o que é uma alimentação equilibrada e saudável? Como
              manter esses cuidados no dia a dia e qual é a importância disso?
              Pensando em dúvidas como essa, preparamos um texto que tem como
              objetivo responder aos seus principais questionamentos sobre o
              assunto.
            </p>
          </div>
        </section>

        <section className="post vermelho">
          <img src="/public/banana.webp" alt="Banana" />
          <div className="post-content">
            <h3>
              Saiba por que o potássio é essencial para a saúde
              cardiovascular: <br />
            </h3>
            <p>
              Quando o assunto é <b>hipertensão</b>, o sódio costuma roubar a
              cena. Mas existe outro mineral que merece atenção: o potássio. O
              consumo adequado desse nutriente pode ter um impacto ainda maior
              na <b>pressão arterial</b> do que apenas reduzir o sal no dia a
              dia.
            </p>
          </div>
        </section>

        <section className="intro atividade">
          <h3 className="subtitulo-blog atividade-title">Atividade Física</h3>
        </section>

        <section className="post amarelo-claro">
          <img src="/public/atividade-fisica-freepik.webp" alt="Corrida" />
          <div className="post-content">
            <h3>A importância da atividade física</h3>
            <p>
              Mexer o corpo é essencial para o bem-estar. Praticar exercícios
              regularmente melhora o humor, aumenta a energia e fortalece o
              sistema imunológico. Não precisa ser intenso — o importante é se
              movimentar!
            </p>
          </div>
        </section>

        <section className="post azul-claro">
          <img
            src="/public/SEDENTARISMO-1280x720.webp"
            alt="Cadeira extensora"
          />
          <div className="post-content">
            <h3>
            Como sair do sedentarismo? saiba como começar a fazer atividade física
            </h3>
            <p>
            A prática regular de exercícios físicos é uma das principais recomendações para a prevenção e o tratamento de diversas doenças. Segundo o Ministério da Saúde, engajar-se em atividades que exijam movimentação corporal e gasto de energia pode reduzir os riscos de desenvolver problemas como hipertensão, diabetes e câncer de mama. Além disso, fortalece a imunidade e as estruturas musculares e ósseas. 


            </p>
          </div>
        </section>

        <section className="post amarelo">
          <img
            src="/public/como-incentivar-criancas-adolescentes-atividade-fisica.jpg-510x392.webp"
            alt="Crianças brincando"
          />
          <div className="post-content">
            <h3>
              Como incentivar que crianças e adolescentes pratiquem atividade
              física
            </h3>
            <p>
            Em um mundo cada vez mais digital, as discussões sobre a importância do incentivo às atividades físicas têm adquirido tom de urgência. 
            A preocupação diz respeito, sobretudo, à importância dos exercícios no desenvolvimento de crianças e adolescentes.

Mais do que uma forma de lazer, uma infância ativa é fundamental para o desenvolvimento físico, mental e social. 
            </p>
          </div>
        </section>

        <section className="post roxo">
          <img src="/public/gettyimages-476612752.webp" alt="Sono" />
          <div className="post-content">
            <h3>Sono e recuperação: o descanso também é saúde</h3>
            <p>
             Dormir bem é essencial para renovar as energias e manter o corpo equilibrado. Durante o sono, o organismo se recupera, fortalece o sistema imunológico e melhora o humor.  Respeitar o tempo de descanso é cuidar do corpo e da mente.
            </p>
          </div>
        </section>

        <section className="intro dr-responde">
          <div className="it-dr">
            <h3 className="subtitulo-blog dr-responde-title">Dr. Responde</h3>
          </div>
        </section>

        <section className="post-cinza">
          <img src="/public/cigarroeletronico.jpg" alt="Cigarro" />
          <div className="post-content-dr">
            <h1 className="cigarro">Cigarro eletrônico faz mal à saúde?</h1>
            <p>
              Sim, o uso do cigarro eletrônico, vape, e-cigarro ou qualquer outro
              nome utilizado para dispositivos eletrônicos para fumar (DEFs) é
              prejudicial à saúde. Não existe um padrão de qualidade ou controle
              de segurança na fabricação desses produtos.
            </p>
          </div>
        </section>

        <section className="post-cinza">
          <img
            src="/public/remedios-gestantes-nao-devem-tomar-510x392.webp"
            alt="Gestantes"
          />
          <div className="post-content-dr">
            <h3 className="gravidez">
              Quais remédios as gestantes não devem tomar?
            </h3>
            <p>
              Durante a gravidez, até uma simples dor de cabeça pode gerar
              dúvidas sobre qual remédio é realmente seguro. Muitas substâncias
              atravessam a placenta e podem afetar o desenvolvimento do bebê.
            </p>
          </div>
        </section>

        <section className="post-cinza">
          <img src="/public/coceira-na-vagina.webp" alt="coceira íntima" />
          <div className="post-content-dr">
            <h3 className="melatonina">
            Coceira na vagina: Saiba Como Se Cuidar
            </h3>
            <p>
            A coceira vaginal é uma das queixas mais comuns nos consultórios ginecológicos e pode surgir em qualquer fase da vida da mulher, desde a infância até a pós-menopausa. 
            Em muitos casos, está ligada a situações simples e passageiras, mas também pode indicar problemas mais sérios que exigem avaliação médica.
            </p>
          </div>
        </section>
      </main>
    
    

      <Rodape/>
    </div>
  
  );
}