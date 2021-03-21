import React, { useState } from 'react';
import Moment from 'react-moment';
import WeatherImage from './WeatherImage';
import WindImage from './WindImage';
import WeatherTabs from './WeatherTabs';

const ForecastView = ({ items = [] }) => {

    const [activeTab, setActiveTab] = useState(0); // Temperature is selected by default

    const onTabChange = (id) => {
        setActiveTab(id);
    }

    return (
        <>
            <WeatherTabs active={activeTab} onSelect={onTabChange} />
            <div className="forecast-wrapper">

                {items.map((data, index) => {
                    if (data) {
                        if (activeTab === 0) {
                            // Temperature Section
                            return (
                                <div key={data.id} className="forecast-item">
                                    <Moment format="MMM D" date={data.applicable_date} />
                                    <WeatherImage imageName={data.weather_state_abbr} />
                                    <p>{data.weather_state_name}</p>
                                    <p>{Math.ceil(data.min_temp)}/{Math.ceil(data.max_temp)}°C</p>
                                    <p>{data.humidity}%</p>
                                </div>
                            )
                        } else {
                            // Wind Section
                            return (
                                <div key={data.id} className="forecast-item">
                                    <Moment format="MMM D" date={data.applicable_date} />
                                    <WindImage imageName={data.wind_direction_compass} />
                                    <p>{Math.ceil(data.wind_speed)}(mph)</p>
                                    {/* <p>{Math.ceil(data.min_temp)}/{Math.ceil(data.max_temp)}°C</p>
                                <p>{data.humidity}%</p> */}
                                </div>
                            )
                        }
                    }
                    return null
                })}
            </div>

        </>
    );
}

export default ForecastView