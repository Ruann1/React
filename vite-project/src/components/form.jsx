import {useState} from 'react'


function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log(`Cadastrou o usuário ${nome} com a senha ${password}`)
    }

    const [nome, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <>
        <div>
            <h1>Meu Cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
        <div>
            <label htmlFor="itexto">Seu Nome: </label>
            <input type="text" 
            name="texto" id="itexto" 
            placeholder="Seu Nome" 
            onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="isenha">Senha:</label>
            <input type="password" 
            name="senha" 
            id="isenha" 
            placeholder="Sua Senha" 
            onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
            <input type="submit" value="Cadastrar" />
        </div>
        </form>
        </div>
        </>
    )

}

export default Form

