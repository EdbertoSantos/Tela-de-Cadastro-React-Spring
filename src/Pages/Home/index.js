import React from "react"
import { Link } from "react-router-dom"

function Home() {
    return(
        <div className="infos">
            <div className="login">
                <h1><n>Login</n></h1>
                <input type={Text} className='text' placeholder="Email"></input><p/>
                <input type={"password"} className='text' placeholder="Senha"></input><p/>
                <Link to="/Cadastrar"><span className="esqueceu">esqueceu a senha?</span><p/></Link>
                <Link to="/Cadastrar"><input type={"button"} className='btn' value='Cadastrar'></input></Link>
                <Link to="/Dados"><input type={"button"} className='btn' value='Entrar'></input></Link>
            </div>
        </div>
    )
}

export default Home 