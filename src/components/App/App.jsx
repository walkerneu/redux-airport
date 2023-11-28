import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {

  // store.airlineCount, airlineCount = the reducer made in index.js
  // MUST BE SAME NAME USED IN INDEX.JS
  const airlineArray = useSelector((store) => store.airlineCount)


  const dispatch = useDispatch()

  const [airlineInput, setAirlineInput] = useState('');
  const [planeCountInput, setPlaneCountInput] = useState('');

  const airlineObject =
    {airline: airlineInput,
    planes: planeCountInput}

  const addAirline = (e) => {
    e.preventDefault()
    dispatch({
      type: "ADD_AIRLINE",
      payload: airlineObject
    })
    setAirlineInput('')
    setPlaneCountInput('');
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={addAirline}>
      <input placeholder='Airline Name'
              value={airlineInput}
              onChange={(e) => setAirlineInput(e.target.value)}/>
      <input placeholder="Number of Planes"
            value={planeCountInput}
            onChange={(e) => setPlaneCountInput(e.target.value)}/>
      <button>Add Airline</button>
      </form>
      <table>
        <thead>
          <tr>
            <td>
              Airlines
            </td>
            </tr>
        </thead>
        <tbody>
        {airlineArray.map((airline) => (
          <tr>
            <td>{airline.airline}</td>
            <td>{airline.planes}</td>
          </tr>
      ))}
      </tbody>
        </table>
    </div>
  );
}

export default App;
