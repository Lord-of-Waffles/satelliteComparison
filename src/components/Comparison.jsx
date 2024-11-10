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
                const responseOne = await fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${userLon}&lat=${userLat}&date=${userStartDate}&dim=0.2&api_key=0XuBhFHXY7MpKs12GIvRcEtZYUUf4A9hKmPexH6H`);
                if (!responseOne.ok) {
                    throw new Error(`Image One Fetch Error: ${responseOne.status} ${responseOne.statusText}`);
                }
                const blobOne = await responseOne.blob();
                const imageOneUrl = URL.createObjectURL(blobOne);

                const responseTwo = await fetch(`https://api.nasa.gov/planetary/earth/imagery?lon=${userLon}&lat=${userLat}&date=${userLastDate}&dim=0.2&api_key=0XuBhFHXY7MpKs12GIvRcEtZYUUf4A9hKmPexH6H`);
                if (!responseTwo.ok) {
                    throw new Error(`Image Two Fetch Error: ${responseTwo.status} ${responseTwo.statusText}`);
                }
                const blobTwo = await responseTwo.blob();
                const imageTwoUrl = URL.createObjectURL(blobTwo);

                setImages({ imageOne: imageOneUrl, imageTwo: imageTwoUrl });

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

