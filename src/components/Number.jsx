import React from 'react'
import { useParams } from 'react-router';


const Number = (props) => {

    const { num } = useParams()

    return (
        <div>
            <h3>The number is {num}</h3>
        </div>
    )
}

export default Number
