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

        // this.menus = ["Projects", "Contact", "About"];
        this.state = {
            menus: this.props.menus,
            fact: "",
            name: "Dinesh"
        }

        console.log("constructor called...");

        // this.output = this.menus.map((v, i) => <div key={i}>{v}</div>)

        this.handleFact = this.handleFact.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }

    static getDerivedStateFromProps(props) {
        console.log("getDerviedStateFromProps called...");
        return {menus: props.menus};
    }

    componentDidMount() {
        console.log("componentDidMount called...");

        fetch("https://catfact.ninja/fact")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState((prev) => ({...prev, fact: data.fact}) )
            })
    }

    componentDidUpdate() {
        console.log("componentDidUpdate called...");

        // fetch("https://catfact.ninja/fact")
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         this.setState((prev) => ({...prev, fact: data.fact}) )
        //     })
    }

    shouldComponentUpdate(prevState, nextState) {
        console.log("Previous state: " + prevState.name);
        console.log("Next state: " + nextState.name);
        if(prevState.name === nextState.name)
            return false;
        else
            return true;
    }

    async handleFact() {
        console.log("1");
        fetch("https://catfact.ninja/fact")
            .then(res => res.json())
            .then(data => {
                console.log("2");
                this.setState((prev) => ({...prev, fact: data.fact}) )
            });
        console.log("3");

        // let res = await fetch("https://catfact.ninja/fact");
        // console.log("1");
        // let data = await res.json();
        // console.log("2");
        // this.setState((prev) => ({...prev, fact: data.fact}) )
        // console.log("3");
    }

    handleChangeName() {
        // if(this.state.name !== "Dinesh") {
            this.setState((prev) => ({...prev, name: "Bhaskar"}))
        // }
    }

    render() {
        console.log("render called...");
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
                        this.state.menus.map((menuitem, index) => {
                            return (
                                <div key={index}>{menuitem}</div>
                            )
                        })
                    }
                </div>
                <p><button onClick={() => this.setState((prev) => ({menus: ["Project", "Contact", "About"]}))}>Change Menu</button></p>
                <div>
                    {/* {this.output} */}
                </div>

                <p>
                    {this.state.fact}
                </p>
                <p>
                    <button onClick={this.handleFact}>Show Fact</button>
                </p>

                <p>
                    {this.state.name}
                </p>
                <p>
                    <button onClick={this.handleChangeName}>Change Name</button>
                </p>
            </div>
        )
    }
}

export default ClsHeaderComponent;