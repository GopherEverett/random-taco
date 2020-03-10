import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Taco from './components/Taco'
import { Navbar } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [taco, setTaco] = useState()
  useEffect(() => {
    getTaco()
  }, [])

  const getTaco = () => {
    axios.get('https://taco-randomizer.herokuapp.com/random/').then((res) => {
      setTaco(res.data)
    })
  }

  return (
    <div className="App">
      <Navbar bg="light">
        <Navbar.Brand href="#home">
          <img
            src="https://cdn0.iconfinder.com/data/icons/elasto-fast-food/26/06-FOOD-READY_taco-512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />{' '}
          TACO ME
        </Navbar.Brand>
      </Navbar>
      {taco ?
        <Taco taco={taco} getTaco={getTaco} />
        :
        null
      }
    </div>
  );
}

export default App;
