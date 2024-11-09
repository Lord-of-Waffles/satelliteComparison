import React from 'react';

const Juxtapose = () => {
    React.useEffect(() => {
        new Juxtapose.JXSlider('#foo',
            [
                {
                    src: 'https://example.com/firstimage.jpg',
                    label: '2009',
                    credit: 'Image Credit'
                },
                {
                    src: 'https://example.com/secondimage.jpg',
                    label: '2014',
                    credit: "Image Credit"
                }
            ],
            {
                animate: true,
                showLabels: true,
                showCredits: true,
                startingPosition: "50%",
                makeResponsive: true
            });
    }, []);

    return (
        <div id="foo"></div>
    );
};

export default Juxtapose;

