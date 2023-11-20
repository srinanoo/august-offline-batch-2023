import { useEffect, useState } from "react";

function FnApiComponent() {

    const [fact, setFact] = useState("");
    const [count, setCount] = useState(0);

    // its same as componentDidUpdate (infinite loop when state variable values changes) (which will call render whenever the "state" changes)
    // useEffect(() => {
    //     console.log("useEffect...");
    //     fetch("https://catfact.ninja/fact")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setFact(data.fact);
    //         })
    // });

    // its same as componentDidUpdate (which will call render whenever the "state" changes)
    useEffect(() => {
        console.log("useEffect 2...");
        // let temp = "Dinesh";
        fetch("https://catfact.ninja/fact")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if(data.fact !== fact)
                setFact(data.fact);
            })
    },[count]);

    // useEffect(() => {
    //     console.log("useEffect...");
    //     fetch("https://catfact.ninja/fact")
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setFact(data.fact);
    //         })
    // },[]); // if dependancy is set to empty array then its equal to "componentDidMount"

    console.log("render...");
    return (
        <>
            <h1>API</h1>
            <p>Fact: {fact}</p>
            <p>Count: {count}</p>
            <p><button onClick={() => setCount((count) => count+1)}>Update Count</button></p>
        </>
    )
}

// function AnotherFunction() {
//     return (
//         <>
//             Another Function
//         </>
//     )
// }

export default FnApiComponent;
// export { AnotherFunction };