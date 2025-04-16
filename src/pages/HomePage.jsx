import { Link } from "react-router-dom"
import { useGlobal } from "../contexts/GlobalContext"
export default function HomePage() {
    const { movies } = useGlobal()

    return (
        <>
            <div className="p-5 mb-4">
                <div className="container py-5 bg-dark text-white rounded-4 shadow border border-light">
                    <h1 className="display-4 fw-bold mb-3">Welcome to <span className="text-danger">Boolflix</span>!</h1>
                    <p className="fs-5 lh-lg">
                        Boolflix is the world's leading streaming entertainment service with over 200 million paid memberships in over 190 countries. Members enjoy a wide variety of award-winning TV shows, movies, documentaries, and more—anytime, anywhere, and on any internet-connected screen.
                        <br /><br />
                        With Boolflix, you're in control: pause, play, resume watching, or binge an entire season—there are no commercials, and there's always something new to discover.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        movies.map(movie => {
                            return (
                                <div className="col" key={movie.id}>
                                    <div className="card border-secondary bg-dark text-white h-100">
                                        <Link to={`/movies/${movie.id}`}><img className="card-img-top" src={`http://localhost:3000/images/${movie.image}`} alt={movie.title} /></Link>
                                        <div className="card-body">
                                            <h5 className="card-title text-danger fs-4 fw-bold">{movie.title}</h5>
                                            <p className="card-text small fst-italic">{movie.abstract}</p>
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