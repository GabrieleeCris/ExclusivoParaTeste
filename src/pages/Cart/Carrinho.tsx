import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Carrinho() {
    const { items, limparCart } = useContext(AuthContext)

    return (
        <div>
            {items.map((item) => (
                <div>
                    <h1>{item.nome}</h1>
                    <h2>{item.descricao}</h2>
                    <h2>R${item.preco}</h2>
                </div>
            ))}

            <button onClick={limparCart}>Finalizar Comprar</button>
        </div>
    )
}

export default Carrinho