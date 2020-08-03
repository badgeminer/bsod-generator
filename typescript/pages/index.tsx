import * as React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import Head from 'next/head';
import {Container, Paper, TextField, Button} from '@material-ui/core';
import {any, string} from "prop-types";

interface Target {
    value: any
}

const Home = () => {
    const [body, setBody] = React.useState<string>("");
    const [errorCode, setErrorCode] = React.useState<string>("");
    const [percent, setPercent] = React.useState<number>(0);

    function onBodyChange(event: { target: HTMLInputElement }) {
        setBody(event.target.value);
    }

    function onErrorCodeChange(event: { target: HTMLInputElement }) {
        setErrorCode(event.target.value);
    }

    function onPercentChange(event: { target: HTMLInputElement }) {
        setPercent(parseInt(event.target.value));
    }

    function onSubmit() {
        console.log(body, errorCode);
    }
    return (
        <div className="App">
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
            <div className={"homepage"}>
                <Container maxWidth={"sm"}>
                    <Paper elevation={3} className={"home-paper"}>
                        <h1>BSOD Generator</h1>
                        <div className={"home-form"}>
                            <TextField id={"body-text"} variant={"outlined"} label={"Body text"} multiline fullWidth onChange={onBodyChange} />
                            <TextField id={"error-code"} variant={"outlined"} label={"Error Code"} fullWidth onChange={onErrorCodeChange} />
                            <TextField id={"percent"} variant={"outlined"} label={"Percent complete"} fullWidth type={"number"} onChange={onPercentChange} />
                            <Button variant={"contained"} color={"primary"} onClick={onSubmit}>
                                Submit
                            </Button>
                        </div>
                    </Paper>
                </Container>
            </div>
        </div>
    );
};

export default Home;
