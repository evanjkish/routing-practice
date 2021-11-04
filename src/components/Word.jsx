import React from 'react'
import { useParams } from 'react-router';


const Word = (props) => {

    const { str, txtClr, bgClr } = useParams()

    return (
        <div>
            <h3 style={{
                color: `${txtClr}`,
                backgroundColor: `${bgClr}`
            }}>The word is {str}</h3>
        </div>
    )
}

export default Word
