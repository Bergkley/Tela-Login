import React from 'react'
import {FaUser,FaLock} from 'react-icons/fa'
import { useState } from 'react'
import './Login.css'

const Login = () => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    
    
  return (
    <div className="container">
      <form action="">
        <h1>Acesse o sistema</h1>
        <div>
        <input type="email" placeholder="E-mail" />
        <FaUser className='icon' />
        </div>
        <div>
        <input type="password" placeholder="Senha" />
        <FaLock className='icon' />
        </div>
        <div className="recal-forget">
            <label htmlFor="">
                <input type="checkbox" />
                Lembre de mim
            </label>
            <a href="#" target="_blank">Esqueceu sua senha?</a>
        </div>

        <button>Entrar</button>

        <div className="signup-link">
            <p>
                Ainda não tem uma conta? <a href="#">Registrar</a>
            </p>
            </div>
      </form>
    </div>
  )
}

export default Login;
