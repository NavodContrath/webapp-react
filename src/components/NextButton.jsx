import { Link } from "react-router-dom";

export default function NextButton({ movie }) {
    return (
        <Link to={`/movies/${movie.id + 1}`} type="button" className="btn  btn-black">
            <i className="bi bi-caret-right fs-3 text-dark-danger"></i>
        </Link>
    )
}