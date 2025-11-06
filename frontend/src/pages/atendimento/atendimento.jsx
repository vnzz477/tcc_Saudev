import Cabecalho from '../../components/cabecalho/Cabecalho';
import Rodape from '../../components/rodape/rodape';
import './atendimento.scss';

export default function Ajuda() {
    return(
    <div className='ajuda-conteiner'>
        <Cabecalho />

        <h1 className='titulo'>Ajuda (FAQ)</h1>

        <div className='ajuda-container'>
            
            <section className='cartao-topo'>
                <h2>Fale com a Saúde com Você </h2>
                <p>O seu serviço gratuito de agendamento de consultas online do SUS.<br/>
                Estamos aqui para facilitar seu acesso a saúde na cidade de São Paulo </p>
            </section>

            <h2 className='subtitulo'>Perguntas Frequentes</h2>

            <section className='perguntas-esquerda'>
                <h3 className='pergunta-esquerda'>Quais tipos de consultas posso agendar</h3>
                <p className='resposta-esquerda'>Você pode agendar consultas em varias especialidades medicas oferecidas pelo SUS, <br/>
                como clinica geral, pediatria, ginecologia, odontologia e outros. Estamos sempre <br/>
                atualizando as opções disponiveis para facilitar o seu atendimento.</p>
            </section>

            <section className='perguntas-direita'>
                <h3 className='pergunta-direita'>Como posso agendar minha consulta?</h3>
                <p className='resposta direita'> Basta se cadastrar, acessar a area do agendamento <br/>
                e escolher o melhor medico, dia e horário para sua consulta </p>
            </section>

            <section className='perguntas-esquerda'>
                <h3 className='pergunta-esquerda'>Como entrar em contato com o suporte?</h3>
                <p className='resposta-esquerda'>Entre em contato com as seguintes formas:</p>
                <p className='lista-contato'>
                    1- 11 99999-9999 Celular/WhatsApp <br/>
                    2- 9999999999 Central de Atendimento <br/>
                    3- Ouvidoria 0800 400 400 <br/>
                    4- Email: saudecomvoce@gmail.com 
                </p>
            </section>

            <section className='perguntas-direita'>
                <h3 className='pergunta-direita'>Meus dados estão seguros?</h3>
                <p className='resposta-direita'>Sim, todas as informações são protegidas por sistemas de segurança <br/> 
                e ultilizadas apenas para o agendamento da consulta.
                </p>
            </section>


            < Rodape />
        </div>
  
    </div>      
    );
}