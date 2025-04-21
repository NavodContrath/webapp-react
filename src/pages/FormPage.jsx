import { useGlobal } from "../contexts/GlobalContext"
import { useState, useEffect } from "react"

export default function FormPage() {
    const { movies } = useGlobal()
    const rating = [1, 2, 3, 4, 5]
    const initialFormData = {
        name: "",
        vote: "",
        text: "",
    }
    const [formData, setFormData] = useState(initialFormData)
    const [selectedMovie, setSelectedMovie] = useState('')
    const [formErrors, setFormErrors] = useState({})
    const [success, setSuccess] = useState('')

    const api_url = `http://localhost:3000/api/v1/movies/${selectedMovie}/review`

    function isFormValid(data) {
        const errors = {}
        if (!selectedMovie) errors.movie = "You must select a movie."
        if (data.name.length < 3) errors.name = "Name must be at least 3 charachters long"
        if (data.name.length > 50) errors.name = "Name must be max 50 carachters long"
        if (!data.vote || data.vote < 1 || data.vote > 5) errors.vote = "Vote must be between 1 and 5."
        if (!data.text || data.text.length < 10) errors.text = "Review must be at least 10 characters long."
        if (data.text.length > 500) errors.text = "Review must be max 500 characters long."
        setFormErrors(errors)
        console.log(errors)
        return Object.keys(errors).length === 0
    }


    function handlerSubmit(e) {
        e.preventDefault()
        console.log(formData)
        //validation
        if (!isFormValid(formData)) {
            console.log('form is not valid', formErrors)
            return
        }
        //ajax call
        fetch(api_url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(response => response.json())
            .then(data => {
                console.log('form submitted succesfully', data)
                setFormData(initialFormData)
                setSelectedMovie("")
                setFormErrors({})
                setSuccess('Form submitted correctly')
            })
            .catch(error => {
                console.log({ message: error.message })
            })

    }
    return (
        <div className="d-flex flex-column vh-100 bg-dark text-white">
            <div className="container my-5 form-container flex-grow-1 bg-black p-4 rounded-3">
                <div>
                    <h1 className="mb-3"><span className="text-primary">Review</span>  Form</h1>
                    <p className="lead border-bottom border-light pb-2">
                        Share your thoughts on your favorite films!
                    </p>
                </div>
                {
                    Object.keys(formErrors).length > 0 && (
                        <div className="alert alert-danger mt-3" role="alert">
                            <ul className="mb-0">
                                {
                                    Object.keys(formErrors).map((key, i) => (
                                        <li key={i}>{formErrors[key]}</li>
                                    ))
                                }

                            </ul>
                        </div>
                    )
                }
                {
                    success && (
                        <div className="alert alert-success mt-3" role="alert">
                            <p>{success}</p>
                        </div>
                    )
                }
                <form onSubmit={handlerSubmit} action="POST" className="form-content">
                    <div className="mb-3">
                        <label htmlFor="movie-selector" className="form-label text-white mt-5">Choose a movie</label>
                        <select className="form-select form-select-lg bg-dark text-white" value={selectedMovie} onChange={(e) => setSelectedMovie(e.target.value)} name="movie-selector" id="movie-selector">
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
                        <input type="text" className="form-control bg-dark text-white" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} name="review-user" id="review-user" placeholder="Insert your name" />
                        <small className="form-text text-white">Your name will appear with the review.</small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="review-rating" className="form-label text-white">Rating</label>
                        <select className="form-select form-select-lg bg-dark text-white" value={formData.vote} onChange={(e) => setFormData({ ...formData, vote: parseInt(e.target.value) })} name="review-rating" id="review-rating">
                            <option >Select one</option>
                            {rating.map((r) => (
                                <option key={r} value={r}>{r}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="review-text" className="form-label text-white">Review Text</label>
                        <textarea className="form-control bg-dark text-white" value={formData.text} onChange={(e) => setFormData({ ...formData, text: e.target.value })} name="review-text" id="review-text" rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary mt-3 submit-btn">Submit</button>
                </form>
            </div>
        </div>
    )
}
