import styles from '../project/ProjectCard.module.css'

import { BsFillTrashFill } from 'react-icons/bs'

function ServiceCard({ id, name, cost, description, handleRemove }) {
    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>Custo: R${cost}</p>
            <p>{description}</p>
            <button className={styles.project_card_actions} onClick={handleRemove}>Remover</button>
        </div>
    );
}

export default ServiceCard;
