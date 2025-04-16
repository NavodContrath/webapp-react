import MovieDisplayer from "../components/MovieDisplayer"
import ReviewDisplayer from "../components/ReviewDisplayer"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobal } from "../contexts/GlobalContext";

export default function SingleMovie() {
    const { movies } = useGlobal()
    const rating = [1, 2, 3, 4, 5]
    const { id } = useParams()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/movies/${id}`)
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.error(error))
    }, [id]);

    return (
        <>
            <MovieDisplayer movie={movie} movies={movies} />
            <ReviewDisplayer movie={movie} rating={rating} />
        </>
    )
}