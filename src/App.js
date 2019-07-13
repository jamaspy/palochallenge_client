import React from 'react';
import Form from './components/Form'
import Result from './components/Result';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{color: "white"}}>Enter Your First & Last Name Below To Get Some Nerdy Facts Back</h1>
     <Form/>
     <Result/>
    </div>
  );
}

export default App;
