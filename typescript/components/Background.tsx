import React, { FunctionComponent } from 'react';   
type BackgroundProps = {};

const Background: FunctionComponent<BackgroundProps> = (props) => {
    return (
        <div className={"background"} id={"image"}>
            { props.children }
        </div>
    );
}

export default Background;
