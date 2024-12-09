import { useState } from "react";

function contador() {
    const [conta, setConta] = useState(0);
    function incremento() {
         setConta(conta + 1);
    }
    return(
        <div>
            
            <p>Voce clicou no {conta} vezes</p>
            <button onClick={incremento}>Clique Aqui</button>
        </div>
    )
}

export default contador