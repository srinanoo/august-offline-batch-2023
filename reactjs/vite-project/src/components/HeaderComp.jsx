function HeaderComponent() {
    let logged = true;

    let name = "Dinesh - Inside Header Component";
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

    return (
        <div className="row1">
            <div className="row1section1">
                <div>
                    <img src="images/Dinesh.jpg" alt="" className="logo" />
                </div>
                <div>
                    <p>{logged.toString()}</p>
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
    )
}

export default HeaderComponent;