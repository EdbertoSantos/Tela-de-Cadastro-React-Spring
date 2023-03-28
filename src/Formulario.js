import React from "react"

function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}) {
    return (
        <form>
            <h1>Dados</h1>
            <input type='text'value={obj.nome} onChange={eventoTeclado} placeholder='Nome' name="nome" className="text-formulario" />
            <input type='text' value={obj.email} onChange={ eventoTeclado} placeholder='Email' name="email" className="text-formulario" /><p />
            <input type='text' value={obj.okEmail} onChange={eventoTeclado} placeholder='Confimarção de Email' name="okEmail" className="text-formulario" />
            <input type='password' value={obj.senha} onChange={eventoTeclado} placeholder='Senha' name="senha" className="text-formulario" /><p />
            <input type='password' value={obj.okSenha} onChange={eventoTeclado} placeholder='Confimarção de Senha' name="okSenha" className="text-formulario" /><p />

            {
                botao
                    ?
                    <input type='button' onClick={cadastrar} value='Cadastrar' className="btn" />
                    :
                    <div>
                        <input type='button' onClick={alterar} value='Alterar' className="btn" />
                        <input type='button' onClick={remover} value='Remover' className="btn" />
                        <input type='button' onClick={cancelar} value='Cancelar' className="btn" />
                    </div>
            }


        </form>
    )
}

export default Formulario