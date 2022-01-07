import React from 'react'

const MunroDetail = ({munro}) => {
    return(
        <>
            <h3>{munro.name}</h3>
            <p>Height: {munro.height}</p>
            <p>Region: {munro.region}</p>
            <p>Meaning: {munro.meaning}</p>
        </>

    )
}

export default MunroDetail;