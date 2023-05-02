import React from 'react';
import './WeatherForm.css';

const WeatherForm = props => (
    <div>
        <form onSubmit={props.getWeather}>
            <div className='div'>
                <input type="number" step="any" name="lat" className='input' placeholder="Put latitude" />
                <input type="number" step="any" name="lon" className='input' placeholder="Put longitude" />
            <br></br>
            <button className='button'>
                Get Weather 
            </button>
            </div>
        </form>
    </div>
)

export default WeatherForm; 