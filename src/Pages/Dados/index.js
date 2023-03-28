import React, { useEffect } from "react"
import { useState } from "react";
import Formulario from "../../Formulario"
import Tabela from "../../Tabela"

function Dados() {

    const info = {
        codigo: 0,
        nome: '',
        email: '',
        okEmail: '',
        senha: '',
        okSenha: ''
    }

    const [btnCadastrar, setBtnCadastrar] = useState(true);
    const [infos, setInfos] = useState([]);
    const [objInfo, setObjInfo] = useState(info)

    useEffect(() => {
        fetch("http://localhost:8080/listar")
            .then(retorno => retorno.json())
            .then(retorno_convertido => setInfos(retorno_convertido));
    }, []);

    const aoDigitar = (eve) => {
        setObjInfo({ ...objInfo, [eve.target.name]: eve.target.value })
    }

    const limpar = () => {
        setObjInfo(info);
        setBtnCadastrar(true);
    }


    const cadastrar = () => {
        fetch("http://localhost:8080/cadastrar", {
            method: 'POST',
            body: JSON.stringify(objInfo),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(retorno => retorno.json())
            .then(retorno_convertido => {
                if (retorno_convertido.mensagem !== undefined) {
                    alert(retorno_convertido.mensagem);
                } else {
                    setInfos([...infos, retorno_convertido]);
                    alert("produto cadastrado com sucesso")
                    limpar();
                }
            })
    }

    const alterar = () => {
        fetch("http://localhost:8080/alterar", {
            method: 'PUT',
            body: JSON.stringify(objInfo),
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(retorno => retorno.json())
            .then(retorno_convertido => {

                if (retorno_convertido.mensagem !== undefined) {
                    alert(retorno_convertido.mensagem);
                } else {
                    alert("produto alterado com sucesso")
                    let vetorTemp = [...infos];
                    let indice = vetorTemp.findIndex((p) => {
                        return p.codigo === objInfo.codigo;
                    });
                    vetorTemp[indice]= objInfo;
                    setInfos(vetorTemp);
                    limpar();
                }
            })
    }

    const remover = () => {
        fetch("http://localhost:8080/remover/" + objInfo.codigo, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(retorno => retorno.json())
            .then(retorno_convertido => {
                alert(retorno_convertido.mensagem);
                let vetorTemp = [...infos];
                let indice = vetorTemp.findIndex((p) => {
                    return p.codigo === objInfo.codigo;
                });
                vetorTemp.splice(indice, 1);
                setInfos(vetorTemp);
                limpar();
            })
    }

    const selecionar = (indice) => {
        setObjInfo(infos[indice]);
        setBtnCadastrar(false);
    }

    return (
        <div className="infos">
            <div className="login">
                <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objInfo} cancelar={limpar} remover={remover} alterar={alterar} />
                <Tabela vetor={infos} selecionar={selecionar} />
            </div>
        </div>
    )
}

export default Dados