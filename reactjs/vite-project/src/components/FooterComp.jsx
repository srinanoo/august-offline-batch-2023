function FooterComponent(props) {
    return (
        <>
            {
                props.logged ?
                <div className="row4">
                    <div>&copy; Copyright. All Rights Reserved.</div>
                    <p>Social Media...</p>
                </div>
                :
                <h2>Not Logged In</h2>
            }
        </>
    )
}

export default FooterComponent;