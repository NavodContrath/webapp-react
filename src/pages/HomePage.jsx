import { useGlobal } from "../contexts/GlobalContext"
export default function HomePage() {
    const { movies } = useGlobal()

    return (
        <>
            <div className="p-5 mb-4">
                <div className="container-fluid py-5 bg-danger">
                    <h1 className="display-5 fw-bold">Welcome to Boolflix!</h1>
                    <p className="col-md-8 fs-4">
                        The Ohara Library was the largest and most important center of knowledge, located on the island of Ohara in the West Blue. It was home to the Tree of Knowledge, a massive tree housing vast archives of historical texts, research, and ancient documents.
                    </p>
                </div>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {
                        movies.map(movie => {
                            return (
                                <div className="col" key={movie.id}>
                                    <div className="card border-secondary h-100">
                                        <img className="card-img-top" src={`http://localhost:3000/images/${movie.image}`} alt={movie.title} />
                                        <div className="card-body">
                                            <h5 className="card-title">{movie.title}</h5>
                                            <p className="card-text text-muted">{movie.abstract}</p>
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