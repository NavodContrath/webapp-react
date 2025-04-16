import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

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
            <div className="p-5 my-4">
                <div className="container bg-dark text-white rounded-3 p-5 shadow">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <h1 className="text-uppercase text-danger display-5 fw-bold">{movie.title}</h1>
                            <p><b>{movie.abstract}</b></p>
                            <p className="text-danger">{movie.genre}</p>
                            <p className="text-light">{movie.director}</p>
                        </div>
                        <div className="col-md-6 text-center">
                            <img className="rounded shadow-sm" height={'500px'} src={`http://localhost:3000/images/${movie.image}`} alt={movie.title} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mb-5">
                <h2 className="text-white bg-dark m-0 rounded-top-3 p-2 border border-secondary">Reviews</h2>
                <div className="row py-3">
                    {
                        movie.reviews?.map(review => {
                            return (
                                <div className="col-lg-6 col-sm-12" key={review.id}>
                                    <div className="card bg-dark text-white mb-4 shadow rounded-4 border border-secondary" key={review.id}>
                                        <div className="card-header d-flex align-items-center justify-content-between border-bottom border-secondary">
                                            <h5 className="text-danger fw-bold mb-0">{review.name}</h5>
                                            <div className="rating d-flex">
                                                {
                                                    rating.map((star) => (
                                                        <i key={star} className={`fa-star me-1 ${star <= Math.ceil(review.vote) ? 'fa-solid text-warning' : 'fa-regular text-secondary'}`}></i>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text text-light">{review.text}</p>
                                        </div>
                                        <div className="card-footer border-top border-secondary">
                                            Created at: {review.created_at.slice(0, 10)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}