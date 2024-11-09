import * as React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import firstDog from '../assets/dog1.jpeg'
import secondDog from '../assets/dog2.jpeg'

const Comparison = () => {
    return (
        <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={firstDog} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={secondDog} alt="Image two" />}
        />
    );
};
export default Comparison