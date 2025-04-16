export default function MovieDisplayer({ movie }) {

    return (
        <div className="single-movie p-5 my-4">
            <div className="container bg-black text-white rounded-3 p-5 shadow">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h1 className="text-uppercase text-dark-danger display-5 fw-bold">{movie.title}</h1>
                        <p><b>{movie.abstract}</b></p>
                        <p className="text-dark-danger">{movie.genre}</p>
                        <p className="text-light">{movie.director}</p>
                    </div>
                    <div className="col-md-6 text-center">
                        <img className="rounded shadow-sm" height={'500px'} src={`http://localhost:3000/images/${movie.image}`} alt={movie.title} />
                    </div>
                </div>
            </div>
        </div>
    )
}