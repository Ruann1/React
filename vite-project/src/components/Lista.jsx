import Item from './Item'

function Lista() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marcas = 'Fiat'  ano_lancamento={1987}/>
                <Item marcas = 'Chevrolet'  ano_lancamento={1987}/>
                <Item marcas = 'Volkswagen'
                ano_lancamento={1987}/>
            </ul>
        </>
    )
}

export default Lista