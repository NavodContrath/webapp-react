import { useGlobal } from "../contexts/GlobalContext"
import MovieList from "../components/MoviesList"
export default function HomePage() {
    const { movies, loading } = useGlobal()

    return (
        <>
            <div className="p-5 mt-3">
                <div className="container py-5 px-4 bg-black text-white rounded-4 shadow ">
                    <h1 className="display-4 fw-bold mb-3">Welcome to <span className="text-dark-danger">Boolflix</span>!</h1>
                    <p className="fs-5 lh-lg">
                        Boolflix is the world's leading reviewing service with over 2000+ movies reviewed. Members enjoy reviews for a wide variety of award-winning TV shows, movies, documentaries.
                    </p>
                    <p>
                        With Boolflix, you're in control, and there's always something new to discover.
                    </p>

                </div>
            </div>
            <MovieList movies={movies} loading={loading} />

        </>
    )
}