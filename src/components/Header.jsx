import { NavLink, useLocation } from "react-router-dom"

export default function Header() {
    const location = useLocation()
    const isSingleMoviePage = location.pathname.startsWith("/movies/")
    const isFormPage = location.pathname.startsWith("/reviews/add_review")

    return (
        <header>
            {isSingleMoviePage ? (
                <div className="nav-bar bg-dark-danger">
                    <div className="container d-flex justify-content-center align-items-center" style={{ height: "60px" }}>
                        <NavLink className="nav-home-2 fw-bold fs-3" to="/">Boolflix</NavLink>
                    </div>
                </div>
            ) : (
                <div className="nav-bar py-3">
                    <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center px-5">
                        <div className="d-flex align-items-center gap-4">
                            <div className="logo fw-bold fs-4">
                                <NavLink className="nav-home" to="/">Boolflix</NavLink>
                            </div>
                        </div>
                        {
                            !isFormPage ? (
                                <form className="d-flex mt-3 mt-md-0" role="search">
                                    <input
                                        type="search"
                                        className="form-control bg-dark text-white border-0 rounded-0"
                                        placeholder="Search"
                                    />
                                    <button type="submit" className="btn btn-dark rounded-0 border-0">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </form>
                            ) :
                                (<></>)
                        }
                    </div>
                </div>
            )}
        </header>
    )
}