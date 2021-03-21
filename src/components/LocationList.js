import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
const LocationList = ({ locationList = [], onLocationSelect }) => {
    return (
        <>
            <div className="list-view">
                {locationList.map((data, index) => {
                    if (data) {
                        return (
                            <div
                                key={data.woeid}
                                onClick={() => onLocationSelect(data.woeid)}
                                className="Location-result">
                                
                                <p className="list-item-label" > <FaMapMarkerAlt style={{ color: 'tomato' }} />  {data.title}</p>
        
                            </div>
                        )
                    }
                    return null
                })}
            </div>
        </>
    );
}

export default LocationList