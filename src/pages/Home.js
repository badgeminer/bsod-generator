import React from 'react';
import {withRouter} from 'react-router';
import {Container, Paper, TextField, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';

function Home(props) {
    const [body, setBody] = React.useState("");
    const [errorCode, setErrorCode] = React.useState("");
    const [percent, setPercent] = React.useState(0);
    const history = useHistory();

    function onBodyChange(event) {
        setBody(event.target.value);
    }

    function onErrorCodeChange(event) {
        setErrorCode(event.target.value);
    }

    function onPercentChange(event) {
        setPercent(event.target.value);
    }

    function onSubmit() {
        console.log(body, errorCode);
        history.push("/image", {
            bodyText: body,
            errorCode: errorCode,
            percent: percent
        });
    }

    return (
        <div className={"homepage"}>
            <Container maxWidth={"sm"}>
                <Paper elevation={3} className={"home-paper"}>
                    <h1>BSOD Generator</h1>
                    <div className={"home-form"}>
                        <TextField id={"body-text"} variant={"outlined"} label={"Body text"} multiline fullWidth onChange={onBodyChange} />
                        <TextField id={"error-code"} variant={"outlined"} label={"Error Code"} fullWidth onChange={onErrorCodeChange} />
                        <TextField id={"percent"} variant={"outlined"} label={"Percent complete"} fullWidth type={"number"} onChange={onPercentChange} />
                        <Button variant={"contained"} color={"primary"} onClick={onSubmit}>
                            <Link className={"submit-text"} to={{
                                pathName: '/image',
                                state: {
                                    bodyText: body,
                                    errorCode: errorCode
                                }
                            }}>Submit</Link>
                        </Button>
                    </div>
                </Paper>
            </Container>
        </div>
    );
}

export default withRouter(Home);