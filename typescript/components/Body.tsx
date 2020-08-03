import React from 'react';

// Props definition
type BodyProps = {
    text: string,
    percent: number,
    error: string
} & typeof defaultProps;
// Default props
const defaultProps = {
    text: "default text",
    percent: 0,
    error: "ERROR"
}

const Body = (props: BodyProps) => {
    return (
        <div className={"body-container"}>
            <div className={"emoji-container"}>
                <h1 className={"emoji"}>:(</h1>
            </div>
            <div className={"error-text-container"}>
                <p className={"error-text"}>
                    {props.text}
                </p>
                <p className={"error-text"}>
                    {props.percent}% complete
                </p>
            </div>
            <div className={"qr-container"}>
                <img src={require('./qr.png')}  alt={"qr-code"}/>
                <div className={"qr-text"}>
                    <p>
                        For more information about this issue and possible fixes, visit https://www.windows.com/stopcode
                    </p>
                    <p>
                        If you call a support person, give them this info:
                        <br/>
                        Stop code: {props.error}
                    </p>
                </div>
            </div>
        </div>
    );
}
Body.defaultProps = defaultProps;

export default Body;
