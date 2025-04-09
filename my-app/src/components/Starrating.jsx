import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './style.css'


function Starrating({ numofstars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);



    return (
        <div className="star-rating">

            {[...Array(numofstars)].map((_, index) => {
                const starValue = index + 1;
                return (
                    <FaStar
                        className="star"
                        color={starValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                        size={50}
                        onClick={() => setRating(starValue)}
                        onMouseEnter={() => setHover(starValue)}
                        onMouseLeave={() => setHover(starValue)}
                    />

                );

            })}

        </div>
    )
}

export default Starrating;