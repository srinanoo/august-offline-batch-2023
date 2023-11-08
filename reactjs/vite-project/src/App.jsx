import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HeaderComponent from './components/HeaderComp';
import ProjectsComponent from './components/ProjectsComp';
import AboutComponent from './components/AboutComp';
import FooterComponent from './components/FooterComp';
import ClsHeaderComponent from './components/ClsHeaderComp';

function App() {
    const [count, setCount] = useState(0);

    let logged = true;

    // function HeaderComponent(name) {

    // }
    // HeaderComponent("Dinesh");

    const projects = [
        {
            title: "Project 1 Title",
            description: "Project 1 Description goes here...",
            image: "images/background.jpeg"
        },
        {
            title: "Project 2 Title",
            description: "Project 2 Description goes here...",
            image: "images/background.jpeg"
        },
        {
            title: "Project 3 Title",
            description: "Project 3 Description goes here...",
            image: "images/background.jpeg"
        },
        {
            title: "Project 4 Title",
            description: "Project 4 Description goes here...",
            image: "images/background.jpeg"
        },
        {
            title: "Project 5 Title",
            description: "Project 5 Description goes here...",
            image: "images/background.jpeg"
        },
        {
            title: "Project 6",
            description: "Project 6 Description goes here...",
            image: "images/background.jpeg"
        },
    ]

    return (
    <>
        {/* <HeaderComponent name="New Name" num={1000} num1="1000" logged={logged} />
        <ProjectsComponent projects={projects} logged={logged} />
        <AboutComponent logged={logged} />
        <FooterComponent logged={logged} /> */}

        <ClsHeaderComponent />
    </>
  )
}

export default App
