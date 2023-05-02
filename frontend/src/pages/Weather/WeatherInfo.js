import React from 'react';
import './WeatherInfo.css';
const WeatherInfo = props => {

    console.log(props)

    return(
        <div>
            {
                props.error &&
                <div className='card'>
                    <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ?
            <div>

                <div className='card'>
                    <img src={props.icon}/>

                    <div>
                        Condition:{props.condition}
                        <br></br>
                        Place: {props.city} {props.country}
                        <br></br>
                        Temperature: {props.temperature}ºC
                        <p>
                            <br/>
                        </p>
                    </div>
                </div >
                <div className='hor' >
                    Humidity {props.humidity}%  Wind {props.wind_kph} kp/h Updated at {props.last_updated} 
                </div>
                </div>
                :
                <div></div>
            }


        </div>
    )
}

export default WeatherInfo;