import React from 'react';
import "../App.css";

function Body(props) {

    return (
        <div className={"body-container"}>
            <div className={"emoji-container"}>
                <h1 className={"emoji"}>:(</h1>
            </div>
            <div className={"error-text-container"}>
                <p className={"error-text"}>
                    {props.bodyText}
                </p>
                <p className={"error-text"}>
                    {props.percent}% complete
                </p>
            </div>
            <div className={"qr-container"}>
                <img src={"/qr.png"}  alt={"qr-code"}/>
                <div className={"qr-text"}>
                    <p>
                        For more information about this issue and possible fixes, visit https://www.windows.com/stopcode
                    </p>
                    <p>
                        If you call a support person, give them this info:
                        <br/>
                        Stop code: {props.errorCode}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Body;
