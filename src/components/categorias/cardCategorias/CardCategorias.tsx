import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'
import { AuthContext } from '../../../contexts/AuthContext';
import { useContext } from 'react'

interface CardCategoriaProps {
  categoria: Categoria
}

// function CardTemas({categoria}: CardCategoriaProps {
// ) {
//   const { usuario  } = useContext(AuthContext);
//   const isAdmin = usuario.tipo == "adm"

//   return (
//     <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
//       <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>Categoria</header>
//       <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
//       <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
      
//       \*tudo que so adm pode executar*\
//       {isAdmin ?
      
//        <div className="flex">
//        <Link to={`/editarTema/${categoria.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
//          <button>Editar</button>
//        </Link>
//        <Link to={`/deletarTema/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
//          <button>Deletar</button>
//        </Link>

//      </div>
//      :
//      <><Link to={`/deletarTema/${tema.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
//      <button>Comprar</button>
//    </Link></>
//     }
     
function CardCategorias({categoria}: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>Categoria</header>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
      <div className="flex">
        <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarCategoria/${categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardCategorias