import React, {useRef, useState}  from 'react';
import SignatureCanvas from 'react-signature-canvas';

const signatureComponent = () => {
    const signatureCanv =  useRef({});
    const clear = ()=> signatureCanv.current.clear();
    let [savedSignature, setSignature] = useState('');
    const save = ()=> 
    {
      setSignature(savedSignature = signatureCanv.current.getTrimmedCanvas().toDataURL())
      console.log(savedSignature);
    };
    return (
        <>
        <SignatureCanvas 
        ref = {signatureCanv}
        penColor='black'
        canvasProps={{width: 500, height: 250, className: 'sigCanvas mx-auto'}}
        backgroundColor = 'rgb(240, 242, 245)'
      />   
      <div className='mt-2 Canvas'>
        <button onClick={save} className='btn btn-success'>Save <i className="far fa-save"></i></button> 
        <button onClick={clear} className='btn btn-danger float-right'>Clear <i className="far fa-trash-alt"></i></button>
      </div>
      <img src= {savedSignature} className='mx-auto' alt='Your saved signature'/> 
      </>
    )
}

export default signatureComponent;