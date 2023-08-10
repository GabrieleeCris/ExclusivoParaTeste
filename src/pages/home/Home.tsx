import { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import homeLogo from '../../assets/nutri.png'
import './Home.css';
import Sobre from '../sobre/Sobre';
import Produto from '../../models/Produto';
import { AuthContext } from '../../contexts/AuthContext';
import { GithubLogo } from '@phosphor-icons/react'

// Exemplo pratico carrinho!

function Home() {
    // const { removerProduto, adicionarProduto } = useContext(AuthContext)
    // const [produtos, setProdutos] = useState<Produto[]>([
    //     {
    //         id: 1,
    //         nome: "Produto",
    //         preco: 5,
    //         quantidade: 5,
    //         descricao: "string",
    //         foto: "string",
    //         categoria: null,
    //         usuario: null
    //     },
    //     {
    //         id: 2,
    //         nome: "Produto 2",
    //         preco: 5,
    //         quantidade: 5,
    //         descricao: "string",
    //         foto: "string",
    //         categoria: null,
    //         usuario: null
    //     }
    // ])



    const products = [
        {
            id: 1,
            name: 'Mateus Ferreira',
            // link:"https://github.com/GabrieleeCris",
            href: "https://github.com/GabrieleeCris",
            imageSrc: '/src/assets/matheus.svg',
            imageAlt: "Integrante do projeto",
            price: '',
            color: "",

        },
        {
            id: 2,
            name: 'Letícia Francielle',
            href: '#',
            imageSrc: '/src/assets/leticia.svg',
            imageAlt: "Integrante do projeto",
            price: '',
            color: ''
        },

        {
            id: 3,
            name: 'Larissa Bueno',
            href: '#',
            imageSrc: '/src/assets/larissa.svg',
            imageAlt: "Integrante do projeto",
            price: '',
            color: '',
        },
        {
            id: 4,
            name: ' Júlio Cordeiro',
            href: '#',
            imageSrc: '/src/assets/julio.svg',
            imageAlt: "Integrante do projeto",
            price: '',
            color: '',
        },
        {
            id: 5,
            name: 'Gabriele Cristine',
            href: '#',
            imageSrc: '/src/assets/sobre.svg',
            imageAlt: "Integrante do projeto",
            price: '',
            color: '',
        },
        // More products...
    ]


    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className=" sobre text-2xl font-bold tracking-tight text-gray-90 ">Sobre a equipe</h2>
                    <h2>Nossa equipe é composta por desenvolvedores engajados, comprometidos e recém-formados na Generation Brasil! Juntos, transformamos códigos em soluções extraordinárias.</h2>

                    <div className='flex items-center justify-around'>
                        <div className='flex flex-col items-center justify-center'>

                            <img src="/src/assets/julio.svg" alt="" />
                            <h2>Júlio Cordeiro</h2>

                            <p>
                                <a href="https://github.com/GabrieleeCris" target="_blank">
                                    <img src="../../assets/github.png" />
                                </a>
                            </p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <img src="/src/assets/larissa.svg" alt="" />
                             <h2>Larissa Bueno</h2>

                            <p>
                                <a href="https://github.com/GabrieleeCris" target="_blank">
                                    <img src="/src/assets" />
                                </a>

                            </p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <img src="/src/assets/leticia.svg" alt="" />
                            <h2>Letícia Francielle  </h2>
                            <p>
                            <a href="https://github.com/GabrieleeCris" target="_blank">
                                    <img src="/src/assets" />
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center justify-around'>
                        <div className='flex flex-col items-center justify-center'>
                            <img src="/src/assets/matheus.svg" alt="" />
                            <h2>Mateus Ferreira</h2>
                            
                            <p>
                            <a href="https://github.com/GabrieleeCris" target="_blank">
                                    <img src="/src/assets" />
                                </a>
                            </p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <img src="/src/assets/sobre.svg" alt="" />
                            <h2>Gabriele Cristine</h2>
                            <p>
                            <a href="https://github.com/GabrieleeCris" target="_blank">
                                    <img src="/src/assets" />
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* <div  className=" mt-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={product.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>



        </>
    );
}

export default Home;
