import React from 'react';
import { FaMapMarkerAlt, FaRegTimesCircle } from 'react-icons/fa';
import ForecastView from './ForecastView';
import ClipLoader from "react-spinners/ClipLoader";

const LocationModal = ({ isOpen, setShow, locationData, isLoading }) => {

    const weatherItems = !!locationData ? locationData.consolidated_weather : [];
    return isOpen ? (
        <div className="modal-wrapper">
            <div onClick={() => setShow(false)} className="modal-backdrop" />
            <div className="modal-box">
                <div className="modal-close-btn" onClick={() => setShow(false)}  >
                    <FaRegTimesCircle />
                </div>

                {!isLoading && <div>
                    <h2><FaMapMarkerAlt style={{ color: 'tomato' }} /> <strong>{locationData.title}</strong></h2>
                    <p> {weatherItems[0].weather_state_name} - {Math.ceil(weatherItems[0].min_temp)}/{Math.ceil(weatherItems[0].max_temp)}°C</p>

                    <ForecastView
                        items={weatherItems}
                    />
                </div>}

                {isLoading && <ClipLoader /> }
            </div>
        </div>
    ) : null;
}

export default LocationModal