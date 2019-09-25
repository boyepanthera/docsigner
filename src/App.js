import React from 'react';
import './App.css';
import SignatureCanvas from 'react-signature-canvas';

function App() {
  return (
    <div className="App">
      <div>Boye put me here</div>
      <SignatureCanvas 
      penColor='brown'
      canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}
      backgroundColor = 'rgb(240, 242, 245)'
      />
    </div>
  );
}

export default App;
