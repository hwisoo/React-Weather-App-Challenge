import React from 'react'

export default function Detail(props) {
  const {main, weather} = props.weather
  console.log(main)
  return (
    <div>
    <h2>Details</h2>
    {main&&weather ? (
      <div>
      <p>Current Temperature: {main.temp} &#176;F</p>
      <p>High: {main.temp_max} &#176;F</p> 
      <p>Low: {main.temp_min} &#176;F</p>
      <p>Description: {weather[0].description} <img src={`https://openweathermap.org/img/w/${weather[0].icon}.png`}></img></p>
      
      </div>
    ): <span>loading...</span>}
      
      
    </div>
  )
}
