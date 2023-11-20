import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClsHeaderComponent from './components/ClsHeaderComp';
import FnApiComponent from './components/FnApiComp';
import FnFormComponent from './components/FnFormComp';
import FnFormApiComponent from './components/FnFormApiComp';

// import HeaderComponent from './components/HeaderComp';
// import ProjectsComponent from './components/ProjectsComp';
// import AboutComponent from './components/AboutComp';
// import FooterComponent from './components/FooterComp';
// import ClsHeaderComponent from './components/ClsHeaderComp';
// import ClsProjectsComponent from './components/ClsProjectsComp';

// function App() {
//     // const [count, setCount] = useState(0);

//     // // let logged = true;
//     // const [logged, setLogged] = useState(false);

//     // // function HeaderComponent(name) {

//     // // }
//     // // HeaderComponent("Dinesh");

//     // const projects = [
//     //     {
//     //         title: "Project 1 Title",
//     //         description: "Project 1 Description goes here...",
//     //         image: "images/background.jpeg"
//     //     },
//     //     {
//     //         title: "Project 2 Title",
//     //         description: "Project 2 Description goes here...",
//     //         image: "images/background.jpeg"
//     //     },
//     //     {
//     //         title: "Project 3 Title",
//     //         description: "Project 3 Description goes here...",
//     //         image: "images/background.jpeg"
//     //     },
//     //     {
//     //         title: "Project 4 Title",
//     //         description: "Project 4 Description goes here...",
//     //         image: "images/background.jpeg"
//     //     },
//     //     {
//     //         title: "Project 5 Title",
//     //         description: "Project 5 Description goes here...",
//     //         image: "images/background.jpeg"
//     //     },
//     //     {
//     //         title: "Project 6",
//     //         description: "Project 6 Description goes here...",
//     //         image: "images/background.jpeg"
//     //     },
//     // ];

//     // let result = projects.map(v => {
//     //   return v.title
//     // });
//     // console.log(result);

//     // let result1 = projects.map(v => v);
//     // console.log(result1);

//     // const [name, setName] = useState("Dinesh"); // hooks
//     // const [age, setAge] = useState(10);
//     // const [namesList, setNamesList] = useState([]);

//     // const handleClick = () => {
//     //     console.log("Button Clicked");
//     //     console.log("Before Change: " + name);
//     //     // name = "New Name";
//     //     setName("New Name");
//     //     setAge(100);
//     //     setNamesList(["New Name", "New Name1", "New Name2", "New Name3"]);
//     //     console.log("After Change: " + name);
//     // }

//     // let menus = ["Projects", "Contact", "Blog"];

//     // const handleLogin = () => {
//     //     setLogged(true);
//     // }

//     // const handleLogout = () => {
//     //     setLogged(false);
//     // }

//     return (
//     <>
//         {/* <HeaderComponent name="New Name" num={1000} num1="1000" logged={logged} />
//         <ProjectsComponent projects={projects} logged={logged} />
//         <AboutComponent logged={logged} />
//         <FooterComponent logged={logged} /> */}


//         {/* {result}
//         {
//             projects.map(v => v.title)
//         } */}

//         {/* <p>{name}</p>
//         <p>{age}</p>
//         <p>{namesList}</p>
//         <p><button onClick={handleClick}>Change Name</button></p>

//         <ClsHeaderComponent name="Main Component Name" />
//         <ClsProjectsComponent projects={projects} /> */}

//         {/* {logged.toString()}
//         {
//             logged
//                 ?
//                     <>
//                         <p><button onClick={handleLogout}>Logout</button></p>
//                         <HeaderComponent logged={logged} menus={menus} />
//                         <ProjectsComponent projects={projects} logged={logged} />
//                     </>
//                 :
//                     <>
//                         <p><button onClick={handleLogin}>Login</button></p>
//                     </>
//         } */}
//     </>
//   )
// }


// function App() {
//     const [name, setName] = useState({
//         id: 1,
//         user: "Dinesh"
//     });

        // const [counter, setCounter] = useState(0);

//     return (
//         <>
//             <p>{name.id}</p>
//             <p>{name.user}</p>
//             <p><button onClick={() => setName((prev) => ({...prev, id: 2, user: "New Name"}) )}>Change Name</button></p>
//         </>
//     )
// }

// class App extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             id: 1,
//             name: "Dinesh"
//         }

//         this.menus = ["Menu1", "Menu2", "Menu3"];
//     }

//     render() {
//         return (
//             <>
//                 <p>{this.state.id}</p>
//                 <p>{this.state.name}
//                 <span>TEST Data</span></p>
//                 <p><button onClick={() => this.setState((prev) => ({...prev, id: 2, name: "New Name"}) )}>Change Name</button></p>

//                 <ClsHeaderComponent menus={this.menus} />
//             </>
//         )
//     }
// }

function App() {
    return (
        <>
            {/* <FnApiComponent /> */}
            {/* <AnotherFunction /> */}

            {/* <FnFormComponent /> */}

            <FnFormApiComponent />
        </>
    )
}

export default App
