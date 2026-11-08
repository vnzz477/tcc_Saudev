import './index.scss'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../api';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  async function cadastrar(e) {
    e.preventDefault();

    try {
      const body = { email, cpf, senha };
      await api.post('/usuario', body);

      alert("Usuário cadastrado com sucesso!");
      navigate('/login');
    } catch (err) {
      alert("Erro ao cadastrar: " + err.response?.data?.erro);
    }
  }

  return (
    <div className="cadastro-container">
      <div className="cadastro-lado-esquerdo">
        <img src="/Logo1.png" alt="Saúde com Você" className="cadastro-logo" />
      </div>

      <div className="cadastro-lado-direito">
        <h1>Cadastro - Usuário</h1>

        <form className="cadastro-formulario" onSubmit={cadastrar}>
          <label htmlFor="cad-email">Email:</label>
          <input id="cad-email" required autoComplete="email" type="email" placeholder="Digite seu E-mail" value={email} onChange={e => setEmail(e.target.value)} />

          <label htmlFor="cad-cpf">CPF:</label>
          <input id="cad-cpf" required autoComplete="username" type="text" placeholder="Digite seu CPF" value={cpf} onChange={e => setCpf(e.target.value)} />

          <label htmlFor="cad-senha">Senha:</label>
          <input id="cad-senha" required autoComplete="new-password" type="password" placeholder="Digite sua Senha" value={senha} onChange={e => setSenha(e.target.value)} />

          <button type="submit">Cadastrar</button>
        </form>

        <p className="cadastro-login">
          Já possui uma conta?
          <Link to={'/login'}> Login</Link>
        </p>
      </div>
    </div>
  )
}
