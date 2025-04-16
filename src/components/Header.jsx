import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <div className="nav-bar py-3 bg-danger">
                <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center px-5">
                    <div className="d-flex align-items-center gap-4">
                        <div className="logo fw-bold fs-4 text-dark">
                            <NavLink className='nav-link text-white' to={'/'}>Boolflix</NavLink>
                        </div>
                    </div>
                    <form className="d-flex mt-3 mt-md-0" role="search">
                        <input type="search" className="form-control bg-dark text-white border-0 rounded-0" placeholder="Search" />
                        <button type="submit" className="btn btn-dark rounded-0 border-0">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </header>

    )
}