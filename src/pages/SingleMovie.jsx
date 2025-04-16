import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import MovieDisplayer from "../components/MovieDisplayer"
import ReviewDisplayer from "../components/ReviewDisplayer"

export default function SingleMovie() {
    const { id } = useParams()
    const [movie, setMovie] = useState([])
    const rating = [1, 2, 3, 4, 5]
    useEffect(() => {
        fetch('http://localhost:3000/api/v1/movies/' + id)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMovie(data)
            })
            .then(error => console.log(error))
    }, [])
    return (
        <>
            <MovieDisplayer movie={movie} />
            <ReviewDisplayer movie={movie} rating={rating} />
        </>
    )
}