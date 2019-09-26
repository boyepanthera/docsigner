import React from 'react';
import './App.css';
import SignatureCanvas from 'react-signature-canvas';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <div className='text-center'>Draw your signature here!</div>
      <div className='m-5'>
        <SignatureCanvas 
        penColor='black'
        canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}
        backgroundColor = 'rgb(240, 242, 245)'
        />
      </div>
      <div>
        <button className='btn btn-success'>Save</button> 
        <button className='btn btn-danger float-right'>Delete</button>
      </div>
    </div>
  );
}

export default App;
