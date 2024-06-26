import { useState, useEffect } from "react"
import MovieCard from "../Components/MovieCard"
import './Moviegrid.css'

const Home = () => {

    const moviesURL = import.meta.env.VITE_API

    const apiKey = import.meta.env.VITE_API_KEY

    const [topMovies,setTopMovies] = useState([])

    const getTopMovies = async (url) =>{

        const res = await fetch( url )
        const data = await res.json()

        setTopMovies(data.results)
    }

    useEffect(()=>{
        const topRatedURL = `${moviesURL}top_rated?${apiKey}`
        getTopMovies(topRatedURL)
    },[])

    return (
        <div className="container">
            <h2 className="title">Melhores Filmes</h2>
            <div className="movies-container">
                {topMovies.length===0 && <p>Carregando...</p>}
                {topMovies.length>0 && topMovies.map((movie) => <MovieCard key={movie.id} movie = { movie } />)}
            </div>
        </div>
    )}
export default Home

