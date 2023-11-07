import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HeaderComponent from './components/HeaderComp';
import ProjectsComponent from './components/ProjectsComp';
import AboutComponent from './components/AboutComp';
import FooterComponent from './components/FooterComp';

function App() {
    const [count, setCount] = useState(0);

    return (
    <>
        <HeaderComponent />
        <ProjectsComponent />
        <AboutComponent />
        <FooterComponent />
    </>
  )
}

export default App
