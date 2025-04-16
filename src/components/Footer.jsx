export default function Footer() {
    return (
        <footer className="bg-danger text-dark mt-auto py-4">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h5 className="fw-bold">Boolflix</h5>
                    </div>
                    <div className="col-2">
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">About</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Help Center</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Privacy</a></li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Terms</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-white text-decoration-none">Languages</a></li>
                            <li><a href="#" className="text-white text-decoration-none">Cookie Preferences</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}