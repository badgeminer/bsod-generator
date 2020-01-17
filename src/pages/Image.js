import React from 'react';
import Background from "../components/Background";
import Body from "../components/Body";
import { useLocation } from 'react-router';
import {Button} from "@material-ui/core";
import html2canvas from "html2canvas";

function Image(props) {
    const location = useLocation();
    const { bodyText, errorCode, percent } = location.state;
    const generateImage = () => {
        let image = document.getElementById("image");
        image.style.width = "1024px";
        image.style.height = "768px";
        html2canvas(image).then((canvas) => {
            let a = document.createElement("a");
            a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            a.download = 'image.jpg';
            a.click();
            image.style.width = "100%";
            image.style.height = "100%";
        });
    };

    return (
        <div style={{width: "100%", height: "100%", paddingTop: 45}}>
            <Button variant={"contained"} color={"primary"} onClick={generateImage} style={{marginBottom: 30}}>Download</Button>
            <Background>
                <Body bodyText={bodyText} errorCode={errorCode} percent={percent}/>
            </Background>
        </div>
    );
}

export default Image;