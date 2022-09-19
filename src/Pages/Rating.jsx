import StarsRating from 'stars-rating'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

function Rating(props) {
    const [rating, setRating] = useState(4.5);
    const ratingChanged = (newRating) => {
        setRating(newRating)
    }
    useEffect(() => {

        setRating(parseFloat(props.rating))
    }, [])
    return (
        <div className='flex items-center gap-8 z-10 '>
            <StarsRating
                count={5}
                value={rating}
                onChange={ratingChanged}
                size={props?.size ? parseFloat(props.size) : 24}
                color2={'#ffd700'} />
            <p>{rating}</p>
        </div>
    )
}

export default Rating