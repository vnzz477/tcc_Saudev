import React from 'react';
import './bo.scss';

export default function Botao({ texto, onClick, estilo = "padrao" }) {
  return (
    <button className={`botao botao-${estilo}`} onClick={onClick}>
      {texto}
    </button>
  );
}
