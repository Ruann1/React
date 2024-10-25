import EventoFilho from './eventosProps/compFilho';

function Cevento(){
    function meuEvento(){
        console.log('ok, fui clicado')
    }
 return(
    <div>
        <EventoFilho event={meuEvento} text='Clique para ativar o evento'/>
    </div>
)

}

export default Cevento
