import React from 'react'

function Temperature(props) {
    return (
        <>
            <div className="container location col">
                    <h1>{props.location.name}</h1>
                    <h4>{props.location.region + ', ' + props.location.country}</h4>
                </div>


                <div className="container col temp_icon d-flex justify-content-end align-items-center">
                    <img className='p-2' height='100' width='100' src={props.condition.icon} alt="weather icon" />

                    <div className="temp">
                        <h1 className='text-end'>{props.current.temp_c}°C</h1>
                        <h4 className='text-end'>{props.condition.text}</h4>
                    </div>
                </div>
        </>
    )
}

export default Temperature