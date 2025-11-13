import Botao from "../../components/botao/bo";
import "./termo.scss";

export default function TermosDeUso() {
  return (
    <div className="termos-page">
      <div className="termos-container">
        <h1>Termos de Uso</h1>
        <p>Bem-vindo ao <strong>Saúde com Você</strong>!</p>
        <p>
          Ao usar nosso site, você concorda com os termos abaixo. Leia com atenção antes de continuar.
        </p>

        <section>
          <h2>1. Sobre o site</h2>
          <p>
            O <strong>Saúde com Você</strong> é um portal que facilita o agendamento de consultas médicas
            e oferece informações sobre saúde, bem-estar e cuidados. Nosso objetivo é ajudar você a encontrar
            o atendimento que precisa de forma simples e segura.
          </p>
        </section>

        <section>
          <h2>2. Uso do portal</h2>
          <ul>
            <li>Fornecer informações verdadeiras nos cadastros e formulários;</li>
            <li>Usar o site apenas para fins pessoais e legítimos;</li>
            <li>Não tentar invadir, modificar ou prejudicar o funcionamento do portal.</li>
          </ul>
        </section>

        <section>
          <h2>3. Agendamentos</h2>
          <p>
            Os agendamentos são confirmados após análise de disponibilidade. Se precisar remarcar
            ou cancelar, entre em contato pelos canais informados no site.
          </p>
        </section>

        <section>
          <h2>4. Conteúdo do blog</h2>
          <p>
            As informações publicadas têm caráter informativo e <strong>não substituem orientação médica profissional</strong>.
            Em caso de dúvida, procure um médico.
          </p>
        </section>

        <section>
          <h2>5. Propriedade intelectual</h2>
          <p>
            Todo o conteúdo do site (textos, imagens, design e código) pertence ao
            <strong> Saúde com Você</strong> e não pode ser usado sem autorização.
          </p>
        </section>

        <section>
          <h2>6. Links externos</h2>
          <p>
            Podemos indicar links de outros sites, mas não nos responsabilizamos pelo conteúdo ou práticas desses terceiros.
          </p>
        </section>

        <section>
          <h2>7. Alterações dos termos</h2>
          <p>
            Os termos podem ser atualizados a qualquer momento. Ao continuar usando o site,
            você aceita as novas condições.
          </p>
        </section>

        <section>
          <h2>8. Contato</h2>
          <p>
            Dúvidas? Fale conosco pelo e-mail: <a href="TCC_SAÙDE@saudecomvoce.com.br">TTC_SAÙDE@gmail.com</a>
          </p>
        </section>

        <p className="data">Última atualização: 12/11/2025</p>
      </div>
      <Botao
      
        texto="Voltar ao Início"
        estilo="botao-voltar"
        
        onClick={() => (window.location.href = "/inicio")}

      />
    </div>
    
  );
}
