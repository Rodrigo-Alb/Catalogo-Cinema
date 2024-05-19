import { BsGraphUp, BsWallet2, BsHourglassSplit , BsFillFileEarmarkTextFill } from "react-icons/bs"
import './Movies.css'
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import MovieCard from "../Components/MovieCard"


const moviesURL = import.meta.env.VITE_API
const apikey = import.meta.env.VITE_API_KEY


const formatCurrency = (number) =>{
  return number.toLocaleString("en-us",{
    style:'currency',
    currency:'USD',
  })
}

const Movies = () => {

  const {id} = useParams()  
  const [movie,setMovie] = useState(null)

  const getMovie = async (url) => {

    const res = await fetch( url )
    const data = await res.json()

    setMovie(data)
  }


  useEffect( () => {
    const movieUrl = `${moviesURL}${id}?${apikey}`
    getMovie(movieUrl)
  },[])

  return (
    <div className="movie-page">
      {movie &&(
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2/> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp/> Faturamento:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit/> Duração:
            </h3>
            <p>{movie.runtime} Minutos:</p>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill/> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>

        </>)}
    </div>
  )
}

export default Movies
