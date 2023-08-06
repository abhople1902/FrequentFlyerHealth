import React from 'react'
import {
  NavBarHeader2,
  HeroLayout2,
 } from './ui-components';

import './App.css'




function App() {

  return (
    <>
    <div class="dark">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <header>
        <NavBarHeader2 />
      </header>
      <div>
        <HeroLayout2 />
      </div>
    </div>
    </>
  )
}

export default App
