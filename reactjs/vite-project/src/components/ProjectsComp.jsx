function ProjectsComponent() {
    let logged = true;

    const projects = [
        {
            title: "Project 1 Title",
            description: "Project 1 Description goes here...",
            image: "images/background.jpeg"
        },
        {
            title: "Project 2 Title",
            description: "Project 2 Description goes here...",
            image: "images/background.jpeg"
        },
        {
            title: "Project 3 Title",
            description: "Project 3 Description goes here...",
            image: "images/background.jpeg"
        },
        {
            title: "Project 4 Title",
            description: "Project 4 Description goes here...",
            image: "images/background.jpeg"
        },
        {
            title: "Project 5 Title",
            description: "Project 5 Description goes here...",
            image: "images/background.jpeg"
        },
        {
            title: "Project 6 Title",
            description: "Project 6 Description goes here...",
            image: "images/background.jpeg"
        },
    ]

    return (
        <>
            {
                logged
                    ?
                    <>
                        <div className="row2">
                            <h3>Projects / Experiences</h3>
                            <div className="row2section1">
                                {
                                    projects.map((project, index) => {
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