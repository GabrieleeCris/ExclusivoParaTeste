import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
import Produto from "../models/Produto"
// import { toastAlerta } from "../utils/toastAlerta"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
    adicionarProduto: (produto: Produto) => void
    removerProduto: (produtoId: number) => void
    limparCart: () => void
    items: Produto[]
    quantidadeItems: number
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        tipo: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            alert("Usuário logado com sucesso")
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            alert("Dados do usuário inconsistentes")
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            tipo: "",
            token: ""
        })
    }

    // CÓDIGO DO CARRINHO

    const [items, setItems] = useState<Produto[]>([])

    const quantidadeItems = items.length

    function adicionarProduto(produto: Produto) {
        // Essa sintaxe guarda as info anteriores do State e atualiza com os novos dados(objetos)
        setItems(state => [...state, produto])
    }

    function removerProduto(produtoId: number) {
        // Usamos a função filter, com ela fazemos um Filtro no Array usando uma condição
        const coffeeExistsInCart = items.filter(
            (item) => item.id !== produtoId)

        // Atualiza o State
        setItems(coffeeExistsInCart)
    }

    function limparCart() {
        alert("Compra Efetuada com Sucesso")
        setItems([])
    }


    return (
        <AuthContext.Provider value={{ adicionarProduto, removerProduto, limparCart, items, quantidadeItems, usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}