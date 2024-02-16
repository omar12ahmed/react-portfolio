import Project from "../Project";
import projects from "../data/projects.json"
import { Fade } from "react-awesome-reveal";

function ProjectGallery() {






  return (

    <div>
      {projects.map((project) => (
        <div key={project.id} className="projectContainer">

          <Project
            title={project.title}
            description={project.description}
            giphyId={project.image}
            projectLink={project.projectLink}
          />
          <hr className="projectDivider" />
        </div>
      ))}
    </div>

  );
}

export default ProjectGallery