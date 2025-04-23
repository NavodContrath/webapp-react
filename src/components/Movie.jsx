import NextButton from "./NextButton";
import PrevButton from "./PrevButton";

export default function Movie({ movie, movies }) {
    return (
        <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
                <h1 className="text-uppercase text-dark-danger display-5 fw-bold">{movie.title}</h1>
                <p><b>{movie.abstract}</b></p>
                <p className="text-dark-danger">{movie.genre}</p>
                <p className="text-light">{movie.director}</p>
            </div>
            <div className="col-md-6 d-flex justify-content-center gap-3 align-items-center">
                {movie.id > 1 && (
                    <PrevButton movie={movie} />
                )}
                <img className="rounded shadow-sm" height={'500px'} src={`http://localhost:3000/images/${movie.image}`} alt={movie.title} />
                {
                    movie.id < movies.length && (
                        <NextButton movie={movie} />
                    )
                }
            </div>
        </div>

    )
}