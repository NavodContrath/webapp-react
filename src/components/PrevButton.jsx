import { Link } from "react-router-dom";
export default function PrevButton({ movie }) {
    return (
        <Link to={`/movies/${movie.id - 1}`} className="btn btn-black">
            <i className="bi bi-caret-left fs-3 text-dark-danger"></i>
        </Link>
    )
}