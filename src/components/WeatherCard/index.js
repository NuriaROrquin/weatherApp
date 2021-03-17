import React, { useState } from 'react'
import { SelectField } from '../../Basics/index.js';
import { getDay } from '../../helpers/index.js';
import useForecast from '../../Hooks/useForecast.js';
import { 
  CardContainer, 
  ActualWeather, 
  Rectangle, 
  ForecastCard, 
  Temperature, 
  Description, 
  Humidity,
  WindSpeed,
  Degrees, 
  ContainerWeather, 
  ContainerDescription,
  ContainerData,
  ContainerIcon,
  TemperatureForecast,
  Day,
  ContainerDetailsForecast } from './styled.js';

export default function WeatherCard() {

  const [city, setcity] = useState("Buenos Aires")
  const [country, setcountry] = useState("Argentina")

  const { forecast, weatherDay } = useForecast(city, country)

  const cities = [
    {
      id: 1,
      label: `${city}, ${country}`,
    },
    {
      id: 2,
      label: 'Londres, Inglaterra',
    },
    {
      id: 3,
      label: 'Madrid, España',
    },
    {
      id: 4,
      label: 'Roma, Italia',
    },
    {
      id: 5,
      label: 'Tokio, Japón',
    },
    {
      id: 6,
      label: 'París, Francia',
    }
  ]



    return (
        <CardContainer>
          {weatherDay.map((item, index) => {
            return (
              <ActualWeather key={index}>
                <ContainerWeather>
                  <div>
                    <Day>{getDay(item.items[0].dt_txt).dayOfTheWeek}</Day>
                  </div>
                  <div style={{display: "flex"}}>
                    <Temperature>{item.items[0].main.temp}</Temperature>
                    <Degrees>°C</Degrees>
                  </div>
                  <SelectField options={cities} />
                </ContainerWeather>

                <ContainerData>

                  <ContainerIcon>
                    <img style={{width: "100%", height: "100%"}} alt="iconWeather" src={`http://openweathermap.org/img/w/${item.items[0].weather[0].icon}.png`}></img>
                  </ContainerIcon>

                  <ContainerDescription>
                    <Description>{item.items[0].weather[0].description}</Description>
                    <Humidity>La humedad es de {item.items[0].main.humidity}</Humidity>
                    <WindSpeed>Velocidad del viento: {item.items[0].wind.speed}</WindSpeed>
                  </ContainerDescription>


                </ContainerData>
              </ActualWeather>
            )})}

          
            <Rectangle>
            {forecast.map((item, index) => {
            return (
              <ForecastCard key={index}>
                <div>
                  <Day>{getDay(item.items[0].dt_txt).dayOfTheWeek}</Day>
                </div>
                <ContainerDetailsForecast>
                  <ContainerIcon style={{width: "5rem", height: "5rem"}}>
                    <img style={{width: "100%", height: "100%"}} alt="iconWeather" src={`http://openweathermap.org/img/w/${item.items[0].weather[0].icon}.png`}></img>
                  </ContainerIcon>
                  <div style={{display: "flex"}}>
                    <TemperatureForecast>{item.items[0].main.temp}</TemperatureForecast>
                    <Degrees style={{fontSize: "1rem"}}>°C</Degrees>
                  </div>
                </ContainerDetailsForecast>
              </ForecastCard> 
            )
          })}
            </Rectangle>
        </CardContainer>
    )
}