import React, {useState} from 'react';

const WeatherImage = ({ imageName }) => {

    const [image, setImage] = useState(""); // Temperature is selected by default
    
    import(`../assets/${imageName}.png`).then(img => {
        setImage(img.default)
    })

    return (
        <>
            <div className="forecast-img-container">
                <img className="forecast-img" src={image} alt={imageName}></img>
            </div>
        </>
    )
}

export default WeatherImage