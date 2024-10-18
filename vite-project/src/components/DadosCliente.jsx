import styles from './DadosCliente.module.css'

function Dados({ foto, nome, idade, profissao, sexo }){

    return(
        <div className = {styles.ParEstilo}> 
            <h3><img src={foto} alt={nome}  /></h3>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
            <p>Sexo: {sexo}</p>
        </div>
    )

}

export default Dados