import React from 'react';

const WeatherTabs = ({ active, onSelect }) => {
    return (
        <>
            <div className="weather-tabs">
                <div onClick={ () => onSelect(0) }>
                    <h4>Temperature</h4>
                    {(active === 0) && <hr className="weather-tab-indicator" />}

                </div>
                <div className="weather-tab" onClick={ () => onSelect(1) }>
                    <h4>Wind</h4>
                    {(active === 1) && <hr className="weather-tab-indicator" />}
                </div>
            </div>
        </>
    )
}

export default WeatherTabs