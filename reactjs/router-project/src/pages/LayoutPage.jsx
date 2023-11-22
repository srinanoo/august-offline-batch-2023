import { Outlet } from "react-router-dom";
import FooterComponent from "../components/FooterComp/FooterComp";
import HeaderComponent from "../components/HeaderComp/HeaderComp";
import { useEffect, useState } from "react";

export default function LayoutPage(props) {
    const [noHeader, setNoHeader] = useState(true);
    
    console.log(props);
    console.log(location);

    useEffect(() => {
        if(location.pathname === "/about") setNoHeader(false);
    }, []);

    return (
        <>
            {noHeader.toString()}
            {
                noHeader && <HeaderComponent />
            }
            
            <Outlet />

            <FooterComponent />
        </>
    )
}