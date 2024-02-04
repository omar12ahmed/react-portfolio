import Project from "../Project";
import projects from "../data/projects.json"

function ProjectGallery() {






      return (
        
              <div>
                {projects.map((project) => (
                  <div key={project.id}>
                    <Project
                     title={project.title} 
                     description={project.description} 
                     giphyId={project.image}
                     projectLink={project.projectLink} />
                  </div>
                ))}
              </div>
            
          );
}

export default ProjectGallery