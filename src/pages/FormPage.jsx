import { useGlobal } from "../contexts/GlobalContext"
import { useState, useEffect } from "react"

export default function FormPage() {
    const { movies } = useGlobal()
    const rating = [1, 2, 3, 4, 5]
    return (
        <div className="d-flex flex-column vh-100 bg-dark text-white">
            <div className="container my-5 form-container flex-grow-1 bg-black p-4 rounded-3">
                <div>
                    <h1 className="mb-3"><span className="text-primary">Review</span>  Form</h1>
                    <p className="lead border-bottom border-light pb-2">
                        Share your thoughts on your favorite films!
                    </p>
                </div>
                <form action="" method="post" className="form-content">
                    <div className="mb-3">
                        <label htmlFor="movie-selector" className="form-label text-white mt-5">Choose a movie</label>
                        <select className="form-select form-select-lg bg-dark text-white" name="movie-selector" id="movie-selector">
                            <option>Select one</option>
                            {
                                movies.map(movie => (
                                    <option key={movie.id} value={movie.id}>{movie.title}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="text-white mb-3">
                        <label htmlFor="review-user" className="form-label">Your name</label>
                        <input type="text" className="form-control bg-dark text-white   " name="review-user" id="review-user" placeholder="Insert your name" />
                        <small className="form-text text-white">Your name will appear with the review.</small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="review-rating" className="form-label text-white">Rating</label>
                        <select className="form-select form-select-lg bg-dark text-white" name="review-rating" id="review-rating">
                            <option >Select one</option>
                            {rating.map((r) => (
                                <option key={r} value={r}>{r}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="review-text" className="form-label text-white">Review Text</label>
                        <textarea className="form-control bg-dark text-white" name="review-text" id="review-text" rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary mt-3 submit-btn">Submit</button>
                </form>
            </div>
        </div>
    )
}
