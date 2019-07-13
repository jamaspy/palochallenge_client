import React from 'react';
import Grid from '@material-ui/core/Grid';

class Result extends React.Component {
  state = {
    isLoading: true,
    names: [],
    error: null
  }

  fetchNames() {
    // Fetch Data from Heroku
    fetch(`https://paloitchallenge.herokuapp.com/people.json`)
      // API response and receive data in JSON format
      .then(response => response.json())
      // Update the users state
      .then(data =>
        this.setState({
          names: data,
          isLoading: false,
        })
      )
      // Catch any errors
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
  this.fetchNames();
}

  render() {
    const { isLoading, names, error } = this.state;
    return (
      <React.Fragment>
        <Grid
                container
                spacing={0}
                direction="row"
                alignItems="center"
                justify="center"
                style={{marginTop: 30}}
                >
      
      {error ? <p>{error.message}</p> : null}
      
      {!isLoading ? (
        names.map(name => {
          const { id, firstname, lastname, asciify, binarify, countZeros } = name;
          return (
            <div key={id} 
            style = {{
              width: 300, 
              display: "inline-block", 
              border: "3px solid white",
              borderRadius: 10, 
              textAlign:'center', 
              margin:10, 
              padding:10,
              color: "white"
              }}>
              <p>Name: {firstname} {lastname}</p>
              <p>ASCII: {asciify} </p>
              <p>Binary: {binarify}</p>
              <p>Max Consecutive Zeros: {countZeros}</p>

            </div>
          );
        })
      // If there is a delay in data, let's let the user know it's loading
      ) : (
        <h3>Please Hold Caller...</h3>
      )}
      </Grid>
    </React.Fragment>
    
    );
  }
}

export default Result;
