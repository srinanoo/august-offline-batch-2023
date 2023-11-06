import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    let name = "Dinesh - Vite";
    let num = 10;
    let details = {
        "role": "Technical Trainer",
        "designation": "Web Developer",
        "email": "srinanoo@gmail.com",
    }

    let menus = ["Projects", "Contact", "Blog"];

    //   let output = [];
    //   menus.forEach((v, i) => {
    //     output.push(<div key={i}>{v}</div>);
    //   });
    //   console.log(output);

    let output = menus.map((v, i) => <div key={i}>{v}</div>)

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
            title: "Project 6 Title",
            description: "Project 6 Description goes here...",
            image: "images/background.jpeg"
        },
    ]

    return (
    <>
        <div className="row1">
            <div className="row1section1">
                <div>
                    <img src="images/Dinesh.jpg" alt="" className="logo" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <h4>{num}</h4>
                    <div>{details.role}</div>
                    <div>{details.designation}</div>
                    <div>{details.email}</div>
                </div>
            </div>
            <div className="row1section2">
                {
                    menus.map((menuitem, index) => {
                        return (
                            <div key={index}>{menuitem}</div>
                        )
                    })
                }
            </div>
            <div>
                {output}
            </div>
        </div>
        <div className="row2">
            <h3>Projects / Experiences</h3>
            <div className="row2section1">
                {
                    projects.map((project, index) => {
                        return (
                            <div>
                                <img src={project.image} alt="" />
                                <p>{project.title}</p>
                                <div>{project.description}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className="row3">
            <h3>About Me</h3>
            <div className="row3section1">
                <div>
                    <h4>Personal Details</h4>
                    <ul>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                    </ul>
                </div>
                <div>
                    <h4>Educational Details</h4>
                    <ul>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row4">
            <div>&copy; Copyright. All Rights Reserved.</div>
        </div>
    </>
  )
}

export default App
