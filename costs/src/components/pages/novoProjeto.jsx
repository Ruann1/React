import styles from './novoProjeto.module.css'
import ProjectForm from '../project/ProjectForm'

function NovoProjeto(){
    return (
    <div className={styles.novoprojeto_container}>
        <h1>Criar Projeto</h1>
        <p>Crie seu projeto para depois adicionar os serviços</p>
        <ProjectForm btnText='Criar projeto'/>
    </div>
    )
}

export default NovoProjeto