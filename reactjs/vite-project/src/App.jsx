import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import HeaderComponent from './components/HeaderComp';
import ProjectsComponent from './components/ProjectsComp';
import AboutComponent from './components/AboutComp';
import FooterComponent from './components/FooterComp';
import ClsHeaderComponent from './components/ClsHeaderComp';
import ClsProjectsComponent from './components/ClsProjectsComp';

function App() {
    const [count, setCount] = useState(0);

    // let logged = true;
    const [logged, setLogged] = useState(false);

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
    ];

    let result = projects.map(v => {
      return v.title
    });
    console.log(result);

    let result1 = projects.map(v => v);
    console.log(result1);

    const [name, setName] = useState("Dinesh"); // hooks
    const [age, setAge] = useState(10);
    const [namesList, setNamesList] = useState([]);

    const handleClick = () => {
        console.log("Button Clicked");
        console.log("Before Change: " + name);
        // name = "New Name";
        setName("New Name");
        setAge(100);
        setNamesList(["New Name", "New Name1", "New Name2", "New Name3"]);
        console.log("After Change: " + name);
    }

    let menus = ["Projects", "Contact", "Blog"];

    const handleLogin = () => {
        setLogged(true);
    }

    const handleLogout = () => {
        setLogged(false);
    }

    return (
    <>
        {/* <HeaderComponent name="New Name" num={1000} num1="1000" logged={logged} />
        <ProjectsComponent projects={projects} logged={logged} />
        <AboutComponent logged={logged} />
        <FooterComponent logged={logged} /> */}


        {/* {result}
        {
            projects.map(v => v.title)
        } */}

        {/* <p>{name}</p>
        <p>{age}</p>
        <p>{namesList}</p>
        <p><button onClick={handleClick}>Change Name</button></p>

        <ClsHeaderComponent name="Main Component Name" />
        <ClsProjectsComponent projects={projects} /> */}

        {logged.toString()}
        {
            logged
                ?
                    <>
                        <p><button onClick={handleLogout}>Logout</button></p>
                        <HeaderComponent logged={logged} menus={menus} />
                        <ProjectsComponent projects={projects} logged={logged} />
                    </>
                :
                    <>
                        <p><button onClick={handleLogin}>Login</button></p>
                    </>
        }
    </>
  )
}

export default App
