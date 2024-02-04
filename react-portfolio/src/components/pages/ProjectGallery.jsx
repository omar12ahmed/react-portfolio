import Project from "../Project";
import projects from "../data/projects.json"
import axios from "axios"
import React, {useState, useEffect} from "react";

function ProjectGallery() {

    const weatherApi =(){
        
    }



    return (
        <div>
            <h3>This is a list of my past projects</h3>
            <div>
                {projects.map((project) => {
                    return <Project key={project.id} title={project.title} description={project.description} />
                })}

            </div>
        </div>
    )
}

export default ProjectGallery