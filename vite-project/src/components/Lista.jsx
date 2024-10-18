import Item from './Item'

function Lista() {
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marcas = 'Fiat'/>
                <Item marcas = 'Chevrolet'/>
                <Item marcas = 'Volkswagen'/>
            </ul>
        </>
    )
}

export default Lista