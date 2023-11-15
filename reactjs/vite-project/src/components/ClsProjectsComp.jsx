import React from "react";

class ClsProjectsComponent extends React.Component {
    constructor(props) {
        super(props);

        this.name = "";
    }

    render() {
        return (
            <>
                <div className="row2">
                    <h3>Projects / Experiences</h3>
                    {this.name}
                    <div className="row2section1">
                        {
                            this.props.projects.map((project, index) => {
                                return (
                                    <div>
                                        <img src={project.image} alt="" />
                                        <p>{project.title}</p>
                                        <div>{project.description}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default ClsProjectsComponent;