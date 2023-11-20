import { useRef, useState } from "react";

export default function FnFormComponent() {

    let usernameRef = useRef();
    let passwordRef = useRef();

    const [usernameState, setUsernameState] = useState("");
    const [passwordState, setPasswordState] = useState("");

    const handleForm = () => {
        // impure component way...
        let username = document.querySelector("#txtUsername").value;
        let password = document.querySelector("#paPassword").value;
        console.log("Impure Component...");
        console.log(username, password);

        // intermediate component way...
        let username1 = usernameRef.current.value;
        let password1 = passwordRef.current.value;
        console.log("Intermediate Component...");
        console.log(username1, password1);

        // pure component way...
        console.log("Pure Component...");
        console.log(usernameState, passwordState);
    }

    console.log(usernameState, passwordState);

    return (
        <>
            <h2>Login Form</h2>

            <p><input type="text" id="txtUsername" ref={usernameRef} placeholder="Username:" onChange={(e) => setUsernameState(e.target.value)} /></p>
            <p><input type="password" id="paPassword" ref={passwordRef} placeholder="Password:" onChange={(e) => setPasswordState(e.target.value)} /></p>
            <p><input type="button" value="Login" onClick={handleForm} /></p>
        </>
    )
}