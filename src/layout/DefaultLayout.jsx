import { Outlet } from "react-router-dom";

export default function DefaultLayout() {

    return (
        <>
            <header>
                <div className="nav-bar py-3 bg-light" >
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
            <main>
                <Outlet />
            </main>
            <footer>
                <div className="boottom-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <div className="logo">CIAO</div>
                            </div>
                            <div className="col-2">
                                <ul>
                                    <li><a href="">LOREM</a></li>
                                    <li><a href="">LOREM</a></li>
                                </ul>
                            </div>
                            <div className="col-2">
                                <ul>
                                    <li><a href="">LOREM</a></li>
                                    <li><a href="">LOREM</a></li>
                                    <li><a href="">LOREM</a></li>
                                </ul>
                            </div>
                            <div className="col-2">
                                <ul>
                                    <li><a href="">LOREM</a></li>
                                    <li><a href="">LOREM</a></li>
                                </ul>
                            </div>
                            <div className="col-2">
                                <ul>
                                    <li><a href="">LOREM</a></li>
                                    <li><a href="">LOREM</a></li>
                                    <li><a href="">LOREM</a></li>
                                    <li><a href="">LOREM</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

        </>
    )
}