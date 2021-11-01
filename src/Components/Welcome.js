import React from 'react'
import icon from './weatherIcon.png'

function Welcome(props) {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center">

            <div className="container  m-0 p-0 my-5 d-md-flex justify-content-center align-items-center">


                <div className="container text m-0 p-0 d-flex justify-content-center align-items-center text-center">
                    <h1>Welcome to the Weather App</h1>
                </div>

                <div className="container img p-0 m-0 d-flex justify-content-center align-items-center">
                    {/* <a href="https://storyset.com/app">App illustrations by Storyset</a> */}
                    <img className='img-fluid ms-4' src={icon} alt="icon" style={{ height: '400px', width: '400px' }} />
                </div>

            </div>

            <div className="container text-center  m-md-5">
                <h4>Search your city now.</h4>
            </div>

        </div>
    )
}

export default Welcome
