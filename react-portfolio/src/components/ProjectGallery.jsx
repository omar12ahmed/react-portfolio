import Project from "../components/Project";

function ProjectGallery(){

    return (
        <div> 
            <h3>This is a list of my past projects</h3>
            <div>
                <Project title="project 1" description="this is my first project"/>
                <Project title="project 2" description="this is my second project"/>
                <Project title="project 3" description="this is my third project"/>
                <Project title="project 4" description="this is my fourth project"/>

             </div>
        </div>
    )
}

export default ProjectGallery