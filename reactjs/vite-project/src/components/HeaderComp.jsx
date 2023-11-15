import { useState } from "react";

function HeaderComponent(props) {

    // props.name = "Header Name";

    let name = "Dinesh - Inside Header Component";
    let num = 10;
    let details = {
        "role": "Technical Trainer",
        "designation": "Web Developer",
        "email": "srinanoo@gmail.com",
    }

    // let menus = ["Projects", "Contact", "Blog"];
    const [menus, setMenus] = useState(props.menus);

    //   let output = [];
    //   menus.forEach((v, i) => {
    //     output.push(<div key={i}>{v}</div>);
    //   });
    //   console.log(output);

    let output = menus.map((v, i) => <div key={i}>{v}</div>)

    // console.log(props.name);
    // console.log(props.num);
    // console.log(props.num1);

    const handleMenuChange = () => {
        setMenus(["Menu1", "Menu2", "Menu3"])
    }

    const [user, setUser] = useState({
        name: "User 1",
        age: 30,
        active: true,
    })

    const handleUserData = () => {
        setUser((prevData) => ({...prevData, active: false}))
    }

    return (
        <>
            {
                props.logged ?
                    <div className="row1">
                        <div className="row1section1">
                            <div>
                                <img src="images/Dinesh.jpg" alt="" className="logo" />
                            </div>
                            <div>
                                <p>{props.logged.toString()}</p>
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
                            <p><button onClick={handleMenuChange}>Change Menu</button></p>
                            <p><button onClick={() => setMenus(["1", "2", "3"])}>Change Menu</button></p>
                        </div>
                        <div>
                            <p>{user?.name}</p>
                            <p>{user?.age}</p>
                            <p>{user?.active.toString()}</p>
                            <p><button onClick={handleUserData}>Change User Data</button></p>
                        </div>
                    </div>
                :
                    <h2>Not Logged In</h2>
            }
        </>
        
    )
}

export default HeaderComponent;