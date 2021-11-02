import React from 'react'

function AQI(props) {

    let aqi = Math.round(props.aqi * 10) / 10
    return (

        <>
            <div className='container my-5 d-md-flex justify-content-between align-items-center'>
                <h5 className='text-center'>{props.time}</h5>

                <h5 className='text-center'>AQI {aqi}</h5>
            </div>

            <div className="container my-5 d-md-flex justify-content-between align-items-center">
                <h5 className='text-center'><i class="bi bi-wind"></i> wind speed: {props.wind} kph</h5>

                <h5 className='text-center'><i class="bi bi-water"></i> humidity: {props.humidity}</h5>

            </div>

        </>
    )
}

export default AQI