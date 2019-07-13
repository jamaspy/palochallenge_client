import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios'

export class Form extends Component {
    constructor(){
        super()
        this.state = {
            firstname:"",
            lastname: "",
        }
        this.handleChange = this.handleChange.bind(this)
        
    }
    
    handleChange = input => event => {
        this.setState({
            [input]: event.target.value
        });
    }

    addNewName(firstname, lastname) {
        axios.post( 'https://paloitchallenge.herokuapp.com/people.json', { people: {firstname, lastname} })
        .then(response => {
            console.log(response)
            const names = [ ...this.state.firstname, this.state.lastname, response.data ]
            this.setState({names})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
        
            <React.Fragment>
                <Grid
                container
                spacing={0}
                
                alignItems="center"
                justify="center"

                >

                <TextField
                        label="First Name"
                        defaultValue={this.state.firstname}
                        onChange={this.handleChange('firstname')}
                />
                
                <TextField
                        label="Last Name"
                        defaultValue={this.state.lastname}
                        onChange={this.handleChange('lastname')}
                />
                </Grid>
                <Grid
                container
                spacing={0}
                alignItems="center"
                justify="center"
                style={{marginTop: 30}}
                >
                <Button 
                variant="outlined" 
                color="primary" 
                onClick={this.addNewName}>Add New Name</Button>
                </Grid>
                
            </React.Fragment>
            
        )
    }
}

export default Form
