import { useEffect, useState } from "react";
import axios from "axios";

export default function FnFormApiComponent() {
    const [country, setCountry] = useState("India");
    const [universitiesList, setUniversitiesList] = useState([]);

    const handleUniversities = () => {
        fetchData();
    }

    const fetchData = () => {
        // impure component way...
        fetch(`//universities.hipolabs.com/search?country=${country}`)
            .then(res => console.log(res));
        // .then(data => {
        //     // console.log(data);
        //     let temp = [];
        //     temp = data.slice(0, 10);
        //     // console.log(temp);
        //     setUniversitiesList(temp);
        // });

        // pure component way...
        axios.get(`http://universities.hipolabs.com/search?country=${country}`)
            .then(res => {
                console.log(res);
                let temp = [];
                temp = res.data.slice(0, 10);
                setUniversitiesList(temp);
            });
    }

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <>
            <h1>Universities List - {country}</h1>

            <p><input type="text" placeholder="Enter Country Name:" onChange={(e) => setCountry(e.target.value)} /></p>
            <p><button onClick={handleUniversities}>Show List</button></p>

            <div className="flex">
                {
                    universitiesList?.map((v, i) => {
                        return (
                            <div key={i}>
                                <p>{v.name}</p>
                                <p>{v.web_pages[0]}</p>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}