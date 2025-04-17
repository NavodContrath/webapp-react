import { Link } from "react-router-dom";


export default function MovieDisplayer({ movie, movies }) {

    return (
        <div className="single-movie p-5 mb-5">
            <div className="container bg-black text-white rounded-3 p-5 shadow">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h1 className="text-uppercase text-dark-danger display-5 fw-bold">{movie.title}</h1>
                        <p><b>{movie.abstract}</b></p>
                        <p className="text-dark-danger">{movie.genre}</p>
                        <p className="text-light">{movie.director}</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center gap-3 align-items-center">
                        {movie.id > 1 && (
                            <Link to={`/movies/${movie.id - 1}`} className="btn btn-black">
                                <i className="bi bi-caret-left fs-3 text-dark-danger"></i>
                            </Link>
                        )}
                        <img className="rounded shadow-sm" height={'500px'} src={`http://localhost:3000/images/${movie.image}`} alt={movie.title} />
                        {
                            movie.id < movies.length && (
                                <Link to={`/movies/${movie.id + 1}`} type="button" className="btn  btn-black">
                                    <i className="bi bi-caret-right fs-3 text-dark-danger"></i>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}