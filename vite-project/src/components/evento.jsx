function Evento({ numero }){

    function meuEvento(){
        console.log(`Fui ativado! ${numero}`)
    }

    return(
        <div>
            <p>Meu Evento!</p>
            <button onClick= {meuEvento}>Enviar!</button>
        </div>
    )

}   

export default Evento