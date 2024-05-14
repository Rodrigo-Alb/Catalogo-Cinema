import { Link , useNavigate } from 'react-router-dom'
import { BiCameraMovie, BiSearchAlt } from 'react-icons/bi'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [search,setSearch] = useState('')
    const navigate = useNavigate()

    const handleSubmite = (e) => {
        e.preventDefault();
        console.log(search)

        if(!search) return
        navigate(`/search?q=${search}`)
        setSearch('')
    }

  return (
    <nav id="navbar">
        <h2><Link to="/"> <BiCameraMovie/> Movies Lib </Link></h2>
        <form onSubmit={handleSubmite}>
            <input
             type="text" 
             placeholder='Busque um filme' 
             onChange={(e)=> setSearch(e.target.value)}
             value={search} 
             />

            <button type='submit'><BiSearchAlt/></button>
        </form>
    </nav>
   
  )
}

export default Navbar
