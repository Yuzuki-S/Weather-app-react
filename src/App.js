import React from 'react'; //importing this react package living in packagejson
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
const API_KEY = "a719b8b3592931b4d7510506cc847038"


class App extends React.Component {

    state = {
      temperature:undefined,
      city:undefined,
      country:undefined,
      humidity:undefined,
      description:undefined,
      error:undefined
    }
    
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  }
  render() {
    return (
    <div>   
    <Titles/>
    <Form getWeather={this.getWeather}/> 
    {/* Form Component will have access to the props in the Form.jsx. "this" referes to the App component.
    Setting up a props and setting its value to the App function and have access to Form function in Form.jsx */}
    <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />

    </div>

    );
   }
}
export default App;



//creating an instance of Aoo abd that instace is extending React.Component which lives in somewhere in node_modules