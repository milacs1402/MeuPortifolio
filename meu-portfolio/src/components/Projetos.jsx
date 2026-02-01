import React from "react";
import { projectsData } from "../projectsData";
import ProjectCard from "./ProjectCard";

function Projetos() {
    return(
        <section className="projetos">
            <h1>Meus Projetos</h1>

            <div className="projetos-container">

                {projectsData.map((project) => (

                <ProjectCard 
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    images={project.images}
                    githubLink={project.githubLink}
                    techs={project.techs}
                />
                ))}

            </div>

        </section>
    )
}

export default Projetos;