import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export class Form extends Component {
    render() {
        return (
            <MuiThemeProvider>
            <React.Fragment>
                <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                >

                <TextField
                        label="First Name"
                />
                
                <TextField
                        label="Last Name"
                />
    <br/>
                <Button>Add</Button>

                </Grid>
            </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Form
