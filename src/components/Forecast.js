import React from 'react'

export default function Forecast(props) {
  const {list} = props.forecast
  console.log(list)
  return (
    <div>
      <h2>5 Day Forecast</h2>
    { list ? (
      <div>
        <div className="card">
        <p>Date: {list[0].dt_txt}</p>
        <p>Temp:{list[0].main.temp} &#176;F</p>
        <p>Description: {list[0].weather[0].description} <img src={`https://openweathermap.org/img/w/${list[0].weather[0].icon}.png`}></img></p>
        </div>

        <div className="card">
        <p>Date: {list[8].dt_txt}</p>
        <p>Temp:{list[8].main.temp} &#176;F</p>
        <p>Description: {list[8].weather[0].description} <img src={`https://openweathermap.org/img/w/${list[8].weather[0].icon}.png`}></img></p>
        </div>
        <div className="card">
        <p>Date: {list[16].dt_txt}</p>
        <p>Temp:{list[16].main.temp} &#176;F</p>
        <p>Description: {list[16].weather[0].description} <img src={`https://openweathermap.org/img/w/${list[16].weather[0].icon}.png`}></img></p>
        </div>
        <div className="card">
        <p>Date: {list[24].dt_txt}</p>
        <p>Temp:{list[24].main.temp} &#176;F</p>
        <p>Description: {list[24].weather[0].description} <img src={`https://openweathermap.org/img/w/${list[24].weather[0].icon}.png`}></img></p>
        </div>
        <div className="card">
        <p>Date: {list[32].dt_txt}</p>
        <p>Temp:{list[32].main.temp} &#176;F</p>
        <p>Description: {list[32].weather[0].description} <img src={`https://openweathermap.org/img/w/${list[32].weather[0].icon}.png`}></img></p>
        </div>

      </div>
    ) : <span>loading...</span> }
  </div>
  )
  }

