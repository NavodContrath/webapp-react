import { Link } from "react-router-dom"

export default function MovieList({ movies }) {
    return (
        <div className="container my-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {
                    movies.map(movie => {
                        return (
                            <div className="col" key={movie.id}>
                                <div className="card bg-black text-white h-100">
                                    <Link to={`/movies/${movie.id}`}><img className="card-img-top" src={`http://localhost:3000/images/${movie.image}`} alt={movie.title} /></Link>
                                    <div className="card-body">
                                        <h5 className="card-title text-dark-danger fs-4 fw-bold">{movie.title}</h5>
                                        <p className="card-text small fst-italic">{movie.abstract}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}