import React from "react"
import { Link } from "react-router-dom"

function Cadastrar() {
    return(
        <div className="infos">
            <div className="login">
            <h1><n>Cadastre-se</n></h1>
                <input type={Text} className='text' placeholder="Nome"></input><p/>
                <input type={Text} className='text' placeholder="Email"></input><p/>
                <input type={Text} className='text' placeholder="Confime o seu Email"></input><p/>
                <input type={"password"} className='text' placeholder="Senha"></input><p/>
                <input type={"password"} className='text' placeholder="Confirme a sua Senha"></input><p/>
                <Link to="/"><input type={"button"} className='btn' value='Entrar'></input></Link>
            </div>
        </div>
    )
}

export default Cadastrar