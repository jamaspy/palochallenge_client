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
        this.addNewName = this.addNewName.bind(this)
    }

    // Sets state to users input for firstname and lastname input
    handleChange = input => event => {
        this.setState({
            [input]: event.target.value
        });
    }

    // Takes current state of firstname and lastname and sends to DB then ressets state to ""
    addNewName() {
        axios.post( 'https://paloitchallenge.herokuapp.com/people.json',  {firstname: this.state.firstname, lastname: this.state.lastname} )
        .then(response => {
            this.setState({
                firstname: "",
                lastname: ""
            })
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
                style={{marginTop: 30}}>
                    
                        <TextField
                                label="First Name"
                                defaultValue={this.state.firstname}
                                onChange={this.handleChange('firstname')}                      
                        />
                        
                        <TextField
                                label="Last Name"
                                color="secondary"
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
                    variant="contained" 
                    color="secondary" 
                    onClick={this.addNewName}>Add New Name</Button>

                </Grid>
               
            </React.Fragment>
            
        )
    }
}

export default Form
