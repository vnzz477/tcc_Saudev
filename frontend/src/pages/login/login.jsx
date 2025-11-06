import './login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../../api';

export default function Login() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = localStorage.getItem("USUARIO");
    const token = localStorage.getItem("TOKEN");

    if (usuario && token) {
      navigate('/');
    }
  }, [navigate]);

  async function entrar(e) {
    e.preventDefault();

    try {
      const body = { cpf, senha };
      const resp = await api.post('/login', body);

      const token = resp.data.token;
      const usuario = resp.data.usuario.email;
      const usuarioi = resp.data.usuario;
      

      localStorage.setItem('TOKEN', resp.data.token);
      localStorage.setItem('USUARIO', usuario.email);
      localStorage.setItem('ID_USUARIO', usuarioi.id); 
      navigate('/');
    } catch (err) {
      alert('Cpf ou senha incorretos');
    }
  }

  return (
    <div className="login-container">
      <div className="login-lado-esquerdo">
        <img src="./Logo1.png" className="login-logo" />
      </div>

      <div className="login-lado-direito">
        <h1>Login - Usuário</h1>

        <form className="login-formulario" onSubmit={entrar}>
          <label>CPF:</label>
          
          <input type="text" placeholder="Digite seu CPF" value={cpf} onChange={e => setCpf(e.target.value)}/>

          <label>Senha:</label>
          <input type="password" placeholder="Digite sua Senha" value={senha} onChange={e => setSenha(e.target.value)}/>

          <button type="submit">Entrar</button>

          <p className="login-registro">
            Não possui uma conta?
            <Link to={'/cadastro'}> Cadastrar</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
