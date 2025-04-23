import Movie from "./Movie";

export default function MovieDisplayer({ movie, movies, loading }) {

    return (
        <div className="single-movie p-5 mb-5 position-relative">
            {loading && (
                <div className="d-flex justify-content-center align-items-center loader">
                    <div className="spinner-border text-light" style={{ width: "4rem", height: "4rem" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <div className="container bg-black text-white rounded-3 p-5 shadow">
                <Movie movie={movie} movies={movies} />
            </div>
        </div >
    )
}