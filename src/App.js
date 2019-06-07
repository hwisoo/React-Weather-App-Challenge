import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Detail from './components/Detail';
import Forecast from './components/Forecast';


const API_KEY = 'f68015cb4910abf208ca4d742ad9298f'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      zip: '78701',
      weather: {},
      weatherForecast: {},
    };
    this.zipInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ zip: this.zipInput.current.value})
  
    setTimeout(() => {
      this.handleWeatherData();
      this.handleForecastData();
    }, 400);
  }

  handleChange(event) {
    this.setState({ zip: event.target.value });
  }

  changeAndValidate = async (e) => {
    await this.handleSubmit(e)
    this.handleWeatherData();
    this.handleForecastData();
  }
  

  fetchWeather() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url =
        `https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip},us&appid=${API_KEY}&units=imperial`;
  
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  handleForecastData() {
    let promise = this.fetchForecast();
    promise.then(response => {
        let data = JSON.parse(response);
        this.setState({
          weatherForecast: data
        });
        console.log(this.state.weatherForecast)
    });
  }
  

  handleWeatherData() {
    let promise = this.fetchWeather();
    promise.then(response => {
        let data = JSON.parse(response);
        this.setState({
          weather: data
        });
        console.log(this.state.weather)
    });
  }

  fetchForecast(){
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let url =
        `https://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zip},us&appid=${API_KEY}&units=imperial`;
  
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

  componentDidMount(){ 
    this.handleWeatherData();
    this.handleForecastData();
  }


  render(){

    return (
      <div className="App">
      <header className="App-header">
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Weather App</h1>
        </div>
        <a
          className="App-link"
          href="https://github.com/hwisoo/React-Weather-App-Challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code on Github
        </a>
      </header>
      <div className="container">
        <form className="form" onSubmit={this.handleSubmit}>
        <label>Enter ZIP code: </label>
          <input ref={this.zipInput} type="text" defaultValue={this.state.zip}></input>
          <button type="submit" className="btn btn-dark">Submit</button>
        </form>
      </div>
      
      <div className="container weather-container">
        <Detail zip={this.state.zip} weather={this.state.weather}></Detail>
        <Forecast forecast={this.state.weatherForecast}></Forecast>
      </div>
      
    </div>
  );
}
}

export default App;
