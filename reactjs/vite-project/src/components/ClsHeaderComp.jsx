import React from "react";

class ClsHeaderComponent extends React.Component {
    constructor(props) {
        super(props);
        this.name = "Dinesh - Inside Header Component";
        this.num = 10;
        this.details = {
            "role": "Technical Trainer",
            "designation": "Web Developer",
            "email": "srinanoo@gmail.com",
        }

        this.menus = ["Projects", "Contact", "About"];

        this.output = this.menus.map((v, i) => <div key={i}>{v}</div>)
    }

    render() {
        return (
            <div className="row1">
                <div className="row1section1">
                    <div>
                        <img src="images/Dinesh.jpg" alt="" className="logo" />
                    </div>
                    <div>
                        <h3>{this.props.name}</h3>
                        <h4>{this.name}</h4>
                        <div>{this.details.role}</div>
                        <div>{this.details.designation}</div>
                        <div>{this.details.email}</div>
                    </div>
                </div>
                <div className="row1section2">
                    {
                        this.menus.map((menuitem, index) => {
                            return (
                                <div key={index}>{menuitem}</div>
                            )
                        })
                    }
                </div>
                <div>
                    {this.output}
                </div>
            </div>
        )
    }
}

export default ClsHeaderComponent;