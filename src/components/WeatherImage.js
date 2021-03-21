import React from 'react';

const WeatherImage = ({ imageName }) => {
    return (
        <>
            <div className="forecast-img-container">
                {/* <img src={image} alt={imageName}></img> */}
                <img className="forecast-img" src={`https://www.metaweather.com/static/img/weather/${imageName}.svg`} alt={imageName}/>
            </div>
        </>
    )
}

export default WeatherImage