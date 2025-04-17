import { Link } from "react-router-dom"
export default function ReviewDisplayer({ movie, rating }) {
    return (
        <>
            <div className="container mb-5 p-0  bg-black  rounded-3">
                <h2 className="text-white fw-bold m-0  p-3 border-light border-bottom">Reviews</h2>
                <div className="p-3">
                    {
                        movie.reviews?.map(review => {
                            return (
                                <div className="col-12" key={review.id}>
                                    <div className="card  text-white mb-4 bg-dark " key={review.id}>
                                        <div className="card-header d-flex align-items-center justify-content-between">
                                            <h5 className="text-white fw-bold mb-0">{review.name}</h5>
                                            <div className="rating d-flex">
                                                {
                                                    rating.map((star) => (
                                                        <i key={star} className={`fa-star me-1 ${star <= Math.ceil(review.vote) ? 'fa-solid text-dark-danger' : 'fa-regular text-secondary'}`}></i>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <p className="card-text text-light">{review.text}</p>
                                        </div>
                                        <div className="card-footer">
                                            Created at: {review.created_at.slice(0, 10)}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <Link className="btn btn-danger bg-dark-danger border-0" to='/reviews/add_review'>
                        Add review
                    </Link>
                </div>
            </div>
        </>
    )
}