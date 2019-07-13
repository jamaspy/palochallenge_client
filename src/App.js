import React from 'react';
import Form from './components/Form'
import Result from './components/Result';


function App() {
  return (
    <div 
    className="App" 
    style={{
      backgroundImage: "linear-gradient(160deg, rgba(39,199,171,1) 0%, rgba(70,143,197,1) 90%)", 
      height: "100vh"
      }}>
     <Form/>
     <Result/>
    </div>
  );
}



export default App;
