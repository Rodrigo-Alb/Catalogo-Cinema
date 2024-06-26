import { useEffect , useState } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../Components/MovieCard"
import './Moviegrid.css'

const searchURL = import.meta.env.VITE_SEARCH
const appKey = import.meta.env.VITE_API_KEY

export default function Search() {

    const [searchParams ] = useSearchParams();
    const [movies,setMovies] = useState([])
    const query = searchParams.get('q')

    const getSearchedMovies = async (url) =>{

        const res = await fetch( url )
        const data = await res.json()
        setMovies(data.results)
    }


    useEffect(()=>{
        const searchedMoviesURL =`${searchURL}?${appKey}&query=${query}`
        getSearchedMovies(searchedMoviesURL)
    },[query])

    return(
        <div className="container">
            <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
            <div className="movies-container">
                {movies.length > 0 && 
                    movies.map((movie) => <MovieCard key={movie.id} movie = { movie } />)}
            </div>
        </div>
    
  )
}

/*


const searchURL = import.meta.env.VITE_SEARCH
const appKey = import.meta.env.VITE_API_KEY


 const [useSearchParams] = useSearchParams();

    const [movies,setMovies] = useState([])

    const query = searchParams.get('q')

  return (
    <div className="container">
    <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>
    <div className="movies-container">
        {topMovies.length===0 && <p>Carregando...</p>}
        {topMovies.length>0 && topMovies.map((movie) => <MovieCard key={movie.id} movie = { movie } />)}
    </div>
*/