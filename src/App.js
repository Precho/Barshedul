import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const [diameter,setDiameter]=useState(0);
 const [shapeCode,setShapeCode]=useState(0);
 const [aValue,setAValue]=useState(0);
 const [bValue,setBValue]=useState(0);
 const [cValue,setCValue]=useState(0);

  const zmiana = (evt) => {
    setDiameter(evt.target.value);
    
   
    
  }
  const zmiana2 = (evt) => {
    setShapeCode(evt.target.value);
    
  }
  const zmianaInputA = (evt) => {
    setAValue(evt.target.value);
  }
  const zmianaInputB = (evt) => {
    setBValue(evt.target.value);
  }
  const zmianaInputC = (evt) => {
    setCValue(evt.target.value);
  }

  const print =() => {
console.log("Srednica:"+diameter);
console.log("Shape code:"+shapeCode);
console.log("A:"+aValue);
console.log("B:"+bValue);
console.log("C:"+cValue);
  }
  return (
    <div className="App">
      <div className="container">
      <table className="table">
      <tr>
        <th colspan="5">Insert your Data</th>
        </tr>
  <tr>
    <th>Średnica</th>
    <th>Kod</th> 
    <th>A</th>
    <th>B</th>
    <th>C</th>
  </tr>
  <tr>
    <td> 
        <select id="diameter" onChange={zmiana}>
            <option value="10">H10</option>
            <option value="12">H12</option>
            <option value="16">H16</option>
        </select>
  </td>
    <td>
        <select id="diameter" onChange={zmiana2}>
            <option value="21">21</option>
            <option value="10">10</option>
        </select>
    </td>
        <td>
        <input className="myInput" type="text" onChange={zmianaInputA}/>
        </td>
        <td>
          <input className="myInput" type="text" onChange={zmianaInputB}/>
        </td>
        <td>
          <input className="myInput" type="text" onChange={zmianaInputC}/>
        </td>
  </tr>
</table>
<button type="button" className="btn btn-primary" onClick={print}>Oblicz</button>
</div>
<div className="container">
      <table className="table">
        <tr>
        <th colspan="5">Converted Data</th>
        </tr>
  <tr>
    <th>Średnica</th>
    <th>Kod</th> 
    <th>A</th>
    <th>B</th>
    <th>C</th>
  </tr>
  <tr>
    <td> 
       {diameter}
  </td>
    <td>
        {shapeCode}
    </td>
        <td>
        {aValue}
        </td>
        <td>
         {bValue}
        </td>
        <td>
         {cValue}
        </td>
  </tr>
</table>
</div>
    </div>
  );
}

export default App;
