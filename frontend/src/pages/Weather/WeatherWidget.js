import { Component } from "react";
import WeatherForm from "./WeatherForm"
import { API_KEY } from "../../keys";
import WeatherInfo from "./WeatherInfo";

class WeatherWidget extends Component{

    state= {
        temperature: '',
        condition:'',
        city:'',
        country:'',
        icon:'',
        wind_kph:'',
        humidity:'',
        last_updated:'',
        error: null
    }

    getWeather = async (e) => {
        const {lat , lon} = e.target.elements;
        const latValue = lat.value;
        const lonValue= lon.value
        e.preventDefault();
        if(latValue && lonValue){

            const API_URL =`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latValue},${lonValue}`;
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data)
            console.log(this.state)
    
            this.setState({
                temperature: data.current.temp_c,
                condition: data.current.condition.text,
                city: data.location.name,
                country: data.location.country,
                icon: data.current.condition.icon,
                wind_kph:data.current.wind_kph,
                humidity:data.current.humidity,
                last_updated:data.current.last_updated,
                error: null
            }, ()=> console.log(this.state));
        }
        else{
            this.setState({error:'Fill the blanks'})
        }
    }

    render() {
        return <div>
            <WeatherForm getWeather={this.getWeather} 
            />
            <br></br>
            <WeatherInfo {...this.state} />
        </div>
    }
}

export default WeatherWidget;