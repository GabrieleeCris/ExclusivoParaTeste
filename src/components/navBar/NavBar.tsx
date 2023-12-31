import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
  }

  let navbarComponent

  if (usuario.token !== "") {
    navbarComponent = (
      <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

          <div className='flex gap-4'>
            {/* <div className='hover:underline'>Postagens</div> */}
            <Link to='/categorias' className='hover:underline'>Temas</Link>
            <Link to='/cadastroTema' className='hover:underline'>Cadastrar tema</Link>
            {/* <div className='hover:underline'>Perfil</div> */}
            <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
            <Link to='/cart' className='hover:underline'>Carrinho</Link>


          </div>
          <div className='flex gap-4'>
            <Link to='/categorias' className='hover:underline'>Categoria</Link>
            <Link to='/cadastroTema' className='hover:underline'>Cadastrar categoria</Link>
            <Link to='/produtos' className='hover:underline'><div className='hover:underline'>Produtos</div></Link>
            <Link to='/perfil' className='hover:underline'>Perfil</Link>
            <Link to='' onClick={logout} className='hover:underline'>Sair</Link>

          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar
