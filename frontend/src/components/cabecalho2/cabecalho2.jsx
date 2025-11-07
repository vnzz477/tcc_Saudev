import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./cabecalho2.scss";

export default function Cabecalho2() {

  return (
    <header className="header-cabecalho">
      <div className="logo-area-cabecalho">

        <img src="/logo.png" alt="Saúde com Você" className="logo-cabecalho" />
       
        <h1>SAÚDE COM VOCÊ</h1>

      </div>

    </header>
  );
}
