import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import 'bootstrap/dist/css/bootstrap.min.css';

// import './components/HeaderComp/Header.css';
import './App.css';


import HeaderComponent from './components/HeaderComp/HeaderComp'
import FooterComponent from './components/FooterComp/FooterComp'
import BootstrapComponent from './components/BootstrapComp';
import ReactBootstrapComponent from './components/ReactBootstrapComp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='div1'>
        Div Container
      </div>
      <h2 className='title'>App Component</h2>
      {/* <HeaderComponent />
      <FooterComponent /> */}

      {/* <BootstrapComponent /> */}

      <ReactBootstrapComponent />
    </>
  )
}

export default App
