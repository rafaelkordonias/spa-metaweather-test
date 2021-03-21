import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import LocationList from '../components/LocationList';
import Modal from 'react-modal';
import LocationModal from '../components/LocationModal';
import ClipLoader from "react-spinners/ClipLoader";

const SearchPage = (props) => {

    // Hooks
    const [input, setInput] = useState(''); // Search Input Hook
    const [locationList, setLocationList] = useState(); // Location List Hook    
    const [selectedLocation, setSelectedLocation] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false); // Location Modal Hook
    const [isLoading, setLoading] = useState(false);
    Modal.setAppElement('body');

    // Fetching data whenever Searchbar is being updated
    const fetchData = async (query) => {
        if (query) {
            setInput(query);
            // Protect from 1 letter query
            if(query.length > 1) {
                setLoading(true);
                const response = await fetch(`https://api.allorigins.win/get?url=https://www.metaweather.com/api/location/search/?query=${query}`);
                const data = await response.json();
                setLocationList(JSON.parse(data.contents));
                setLoading(false);
            } 
        } else {
            setInput("");
            setLocationList([]);
        }
    }

    // Fetching Data of selected location.
    const onLocationSelect = async (woeid) => {
        setModalIsOpen(true);
        setLoading(true);
        const response = await fetch(`https://api.allorigins.win/get?url=https://www.metaweather.com/api/location/${woeid}/`);
        const location = await response.json();
        setSelectedLocation(JSON.parse(location.contents));
        setLoading(false);
    }

    const setModalIsOpenToFalse = () => {
        setModalIsOpen(false)
    }

    useEffect(() => { fetchData() }, []);

    return (
        <>
            <div >
                <h1>What's the weather?</h1>
                <SearchBar
                    input={input}
                    onChange={fetchData}
                />
                {(locationList && locationList.length > 0) && 
                    <LocationList
                        locationList={locationList}
                        onLocationSelect={onLocationSelect}
                    />
                }          
                {isLoading &&   <ClipLoader />}
            </div>
            <LocationModal
                isOpen={modalIsOpen}
                setShow={setModalIsOpenToFalse}
                locationData={selectedLocation}
                isLoading={isLoading}
            />
        </>
    );
}

export default SearchPage