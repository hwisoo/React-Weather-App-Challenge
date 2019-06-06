import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const API_KEY = 'f68015cb4910abf208ca4d742ad9298f'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {

      //weather
      weather: {},
      weatherDetails: {},
    };
  }

  

  fetchWeather() {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      let zip = '98327';
      let url =
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${API_KEY}`;
  
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

  handleWeatherData() {
    let promise = this.fetchWeather();
    promise.then(response => {
      console.log((response));
    
    });
  }
  
  componentDidMount(){
    this.handleWeatherData()
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
          href="https://https://github.com/hwisoo/React-Weather-App-Challenge.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code on Github
        </a>
      </header>
      <button className="btn btn-primary">Button</button>
    </div>
  );
}
}

export default App;
