import { useState } from 'react'
import React from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //const url = 'https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=1426b5d17bc08ef6367a71fb5dc0b879'

  return (
    <>
    <div className="App">
      <div className="card">
        <div className="top">
          <div className="location">
            <p>Millbrae</p>
          </div>
          <div className="temp">
            <h1>65°</h1>
          </div>
          <div className="description">
            <p>cloudy</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65°F</p>
          </div>
          <div className="humidity">
            <p>20°</p>
          </div>
          <div className="wind">
            <p>12 mph nw</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
