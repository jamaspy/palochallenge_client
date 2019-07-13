import React from 'react';
import Form from './components/Form'
import Result from './components/Result';


function App() {
  return (
    <div 
    className="App" 
    style={{
      backgroundImage: "linear-gradient(160deg, #fc4a1a 0%, #f7b733 100%)", 
      height: "100vh"
      }}>
     <Form/>
     <Result/>
    </div>
  );
}

export default App;
