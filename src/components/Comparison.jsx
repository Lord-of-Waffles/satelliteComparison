import * as React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import firstDog from '../assets/dog1.jpeg'
import secondDog from '../assets/dog2.jpeg'

const Comparison = () => {
    return (
        <ReactCompareSlider
            itemOne={<ReactCompareSliderImage
                src="https://api.nasa.gov/planetary/earth/imagery?lon=$userLon&lat=$userLat&date=$userStartDate&api_key=0XuBhFHXY7MpKs12GIvRcEtZYUUf4A9hKmPexH6H"
                alt="Image one" />}
            itemTwo={< ReactCompareSliderImage
                src="https://api.nasa.gov/planetary/earth/imagery?lon=$userLon&lat=$userLat&date=$userEndDate&api_key=0XuBhFHXY7MpKs12GIvRcEtZYUUf4A9hKmPexH6H"

                alt="Image two" />}
        />
    );
};
export default Comparison