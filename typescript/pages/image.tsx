import React from 'react';
import Background from '../components/Background';
import Body from '../components/Body';
import '../assets/index.scss';

const Image = () => {
    return (
        <div className="App">
            <Background>
                <Body />
            </Background>
        </div>
    );
};

export default Image;
