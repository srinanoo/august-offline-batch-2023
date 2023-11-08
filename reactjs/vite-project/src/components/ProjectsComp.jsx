function ProjectsComponent(props) {
    return (
        <>
            {
                props.logged
                    ?
                    <>
                        <div className="row2">
                            <h3>Projects / Experiences</h3>
                            <div className="row2section1">
                                {
                                    props.projects.map((project, index) => {
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
                    :
                    <h2>Not Logged In</h2>
            }
        </>
    )
}

export default ProjectsComponent;