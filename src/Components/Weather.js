import React, { useState, useEffect } from 'react'
import AQI from './AQI';
import MyLaoder from './MyLaoder';
import Temperature from './Temperature';


function Weather(props) {

    // const [data, setData] = useState([]);
    const [location, setLocation] = useState('')
    const [current, setCurrent] = useState('')
    const [condition, setCondition] = useState('')
    const [aqi, setAQI] = useState('')
    const [loading, setLoading] = useState(true);


    const api = `https://api.weatherapi.com/v1/current.json?key=fc048679cc8b4f3c8b665354210111&q=${props.city}&aqi=yes`;

    

    useEffect(() => {
        console.log('use effect')

        const update = async () => {
            setLoading(true);
            props.progress(30)
            const response = await fetch(api);
            props.progress(50)
            const data = await response.json();
            props.progress(60)
            setLocation(data.location)
            setCurrent(data.current)
            props.progress(80)
            setCondition(data.current.condition)
            setAQI(data.current.air_quality)
            props.progress(100)
            setLoading(false);
        }
        update();

        return () => {
        
        }
    }, [])



    return (

        <div className="weather">
            {loading ?

                <MyLaoder/>
                :
                <div className='container my-5 d-flex justify-content-center'>

                    <div className="container row">

                        <Temperature location={location} current={current} condition={condition} />

                        <AQI aqi={aqi.pm2_5} time={location.localtime} wind={current.wind_kph} humidity={current.humidity}/>

                    </div>

                </div>
            }
        </div>

    )
}

Weather.defaultProps = {

}

export default Weather
