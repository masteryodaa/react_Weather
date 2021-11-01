import React from 'react'

function AQI(props) {
    
    let aqi = Math.round(props.aqi * 10) / 10
    return (
        <div className='container my-5'>
            <h3>AQI {aqi}</h3>
        </div>
    )
}

export default AQI