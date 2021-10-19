import React from 'react'
import { Link } from "react-router-dom";
const ContinueBuying = () => {
    return (
        <div className="col-6 col-sm-6 col-md-6 col-lg-6  mt-2 mb-2">
            <Link to={"/"}>
                <button type="button" className="btn btn-warning  ">
                    Seguir comprando
                </button>
            </Link>
        </div>
    )
}

export default ContinueBuying
