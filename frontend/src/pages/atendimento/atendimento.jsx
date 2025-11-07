import { useState } from 'react';
import Cabecalho from '../../components/cabecalho/Cabecalho';
import Rodape from '../../components/rodape/rodape';
import './atendimento.scss';

export default function Ajuda() {
    const [ativo, setAtivo] = useState(null);

    const perguntas = [
        {
            id: 1,
            pergunta: 'Quais tipos de consultas posso agendar?',
            resposta: 'Você pode agendar consultas em várias especialidades médicas oferecidas pelo SUS, como clínica geral, pediatria, ginecologia, odontologia e outros.'
        },
        {
            id: 2,
            pergunta: 'Como posso agendar minha consulta?',
            resposta: 'Basta se cadastrar, acessar a área de agendamento e escolher o melhor médico, dia e horário para sua consulta.'
        },
        {
            id: 3,
            pergunta: 'Como entrar em contato com o suporte?',
            resposta: 'Entre em contato pelo WhatsApp (11) 99999-9999, Central de Atendimento 9999999999, Ouvidoria 0800 400 400 ou e-mail saudecomvoce@gmail.com.'
        },
        {
            id: 4,
            pergunta: 'O suporte responde em quanto tempo?',
            resposta: 'Nosso suporte se esforça para responder todas as consultas em até 24 horas úteis durante a semana.'
        },
        {
            id: 5,
            pergunta: 'Meus dados estão seguros?',
            resposta: 'Sim, todas as informações são protegidas por sistemas de segurança e utilizadas apenas para o agendamento da consulta.'
        },
        {
            id: 6,
            pergunta: 'O sistema funciona em todo o Brasil?',
            resposta: 'Atualmente, o serviço está disponível apenas para a cidade de São Paulo, mas estamos trabalhando para expandir para outras regiões.'
        },
    ];

    const toggle = (id) => {
        setAtivo(ativo === id ? null : id);
    };

    return (
        <div className="ajuda-conteiner">
            <Cabecalho />

            <h1 className="titulo">Ajuda (FAQ)</h1>

            <div className="ajuda-container">
                <section className="cartao-topo">
                    <h2>Fale com a Saúde com Você</h2>
                    <p>
                        O seu serviço gratuito de agendamento de consultas online do SUS.<br />
                        Estamos aqui para facilitar seu acesso à saúde na cidade de São Paulo.
                    </p>
                </section>

                <h2 className="subtitulo">Perguntas Frequentes</h2>

                <div className="faq-lista">
                    {perguntas.map((item) => (
                        <div className={`faq-resposta ${ativo === item.id ? 'aberta' : ''}`}>
                            <button className="faq-pergunta" onClick={() => toggle(item.id)}>
                                <span>{item.id} - {item.pergunta}</span>
                                <span className="icone">{ativo === item.id ? '−' : '+'}</span>
                            </button>
                            {ativo === item.id && (
                                <p className="faq-resposta">{item.resposta}</p>
                            )}
                        </div>
                    ))}
                </div>

                <Rodape />
            </div>
        </div>
    );
}