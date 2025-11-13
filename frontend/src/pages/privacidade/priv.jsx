import React from "react";
import "./priv.scss";
import Botao from "../../components/botao/bo";

export default function PoliticaPrivacidade() {
  return (
    <div className="priv-page">
      <div className="priv-container">
        <h1>Política de Privacidade</h1>
        <p>
          O <strong>Saúde com Você</strong> respeita sua privacidade e protege seus dados pessoais.
          Aqui explicamos como coletamos, usamos e cuidamos das suas informações.
        </p>

        <section>
          <h2>1. Quais dados coletamos</h2>
          <ul>
            <li>Nome, e-mail, telefone e CPF (para agendamentos);</li>
            <li>Informações sobre o serviço desejado (especialidade, data e horário);</li>
            <li>Dados técnicos, como IP e cookies, para melhorar sua navegação.</li>
          </ul>
        </section>

        <section>
          <h2>2. Como usamos seus dados</h2>
          <ul>
            <li>Agendar e confirmar consultas;</li>
            <li>Entrar em contato sobre atendimentos;</li>
            <li>Enviar informações e lembretes (quando autorizado);</li>
            <li>Melhorar a experiência e funcionamento do site.</li>
          </ul>
        </section>

        <section>
          <h2>3. Compartilhamento</h2>
          <p>
            Seus dados não são vendidos nem compartilhados, exceto quando necessário para realizar
            agendamentos com parceiros de saúde ou cumprir obrigações legais.
          </p>
        </section>

        <section>
          <h2>4. Segurança</h2>
          <p>
            Adotamos medidas técnicas e administrativas para proteger suas informações contra acessos não autorizados, perda ou vazamento.
          </p>
        </section>

        <section>
          <h2>5. Tempo de armazenamento</h2>
          <p>
            Os dados são mantidos apenas pelo tempo necessário para cumprir as finalidades informadas ou exigidas por lei.
          </p>
        </section>

        <section>
          <h2>6. Seus direitos</h2>
          <p>
            Você pode pedir exclusão, correção ou cópia dos seus dados.  
            Solicite em: <a href="TTC_SAÙDE@saudecomvoce.com.br">TCC_SAÙDE@saudecomvoce.com</a>
          </p>
        </section>

        <section>
          <h2>7. Atualizações</h2>
          <p>
            Esta política pode ser atualizada a qualquer momento. Recomendamos revisá-la periodicamente.
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
