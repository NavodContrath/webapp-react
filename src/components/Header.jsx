import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <div className="nav-bar py-3 bg-light border" >
                <div className="container d-flex justify-content-between">
                    <div className="d-flex">
                        <div className="logo">CIAO</div>
                        <ul className="d-flex gap-3">
                            <li>HOME</li>
                            <li>CONTATTI</li>
                        </ul>
                    </div>
                    <div>
                        <form action="">
                            <input type="search" className="btn border" name="book-search" id="book-search" />
                            <button type="button" className="btn btn-outline-primary">search</button>

                        </form>
                    </div>
                </div>
            </div>
        </header>

    )
}