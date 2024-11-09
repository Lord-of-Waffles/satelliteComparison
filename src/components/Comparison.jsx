import React, { useState, useEffect } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


const Comparison = (props) => {
    const { userLon, userLat, userStartDate, userLastDate } = props; // use `userFirstDate` instead of `userStartDate`

    console.log('Longitude:', userLon);
    console.log('Latitude:', userLat);
    console.log('Start Date:', userStartDate);
    console.log('End Date:', userLastDate);

    const [images, setImages] = useState({ imageOne: '', imageTwo: '' });

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const responseOne = await fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${userLon}&lat=${userLat}&date=${userStartDate}&dim=0.3&api_key=0XuBhFHXY7MpKs12GIvRcEtZYUUf4A9hKmPexH6H`);
                const blobOne = await responseOne.blob(); // Convert to Blob
                const imageOneUrl = URL.createObjectURL(blobOne); // Create a URL for the Blob

                const responseTwo = await fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${userLon}&lat=${userLat}&date=${userLastDate}&dim=0.3&api_key=0XuBhFHXY7MpKs12GIvRcEtZYUUf4A9hKmPexH6H`);
                const blobTwo = await responseTwo.blob(); // Convert to Blob
                const imageTwoUrl = URL.createObjectURL(blobTwo); // Create a URL for the Blob

                setImages({ imageOne: imageOneUrl, imageTwo: imageTwoUrl }); // Update state with URLs

            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, [userLon, userLat, userStartDate, userLastDate]);


    return (

        <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={images.imageOne} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={images.imageTwo} alt="Image two" />}
        />
    );
}

export default Comparison;

