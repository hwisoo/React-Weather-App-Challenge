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
        <h5 className="card-header">Date: {list[0].dt_txt}</h5>
        <p>Temp: {list[0].main.temp} &#176;F</p>
        <p>Description: {list[0].weather[0].description} <img src={`https://openweathermap.org/img/w/${list[0].weather[0].icon}.png`} alt={`${list[0].weather[0].description}`}></img></p>
        </div>

        <div className="card">
        <h5 className="card-header">Date: {list[8].dt_txt}</h5>
        <p>Temp: {list[8].main.temp} &#176;F</p>
        <p>Description: {list[8].weather[0].description} <img src={`https://openweathermap.org/img/w/${list[8].weather[0].icon}.png`} alt={`${list[8].weather[0].description}`}></img></p>
        </div>

        <div className="card">
        <h5 className="card-header">Date: {list[16].dt_txt}</h5>
        <p>Temp: {list[16].main.temp} &#176;F</p>
        <p>Description: {list[16].weather[0].description} <img src={`https://openweathermap.org/img/w/${list[16].weather[0].icon}.png`} alt={`${list[16].weather[0].description}`}></img></p>
        </div>

        <div className="card">
        <h5 className="card-header">Date: {list[24].dt_txt}</h5>
        <p>Temp: {list[24].main.temp} &#176;F</p>
        <p>Description: {list[24].weather[0].description} <img src={`https://openweathermap.org/img/w/${list[24].weather[0].icon}.png`} alt={`${list[24].weather[0].description}`}></img></p>
        </div>
        <div className="card">
          <h5 className="card-header">Date: {list[32].dt_txt}</h5>
            <p>Temp: {list[32].main.temp} &#176;F</p>
            <p>Description: {list[32].weather[0].description} <img src={`https://openweathermap.org/img/w/${list[32].weather[0].icon}.png`} alt={`${list[32].weather[0].description}`}></img></p>
          </div>
        </div>

    ) : <span>loading...</span> }
  </div>
  )
  }

