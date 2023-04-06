import { StyledProjects } from "./style"
import kenziehub from "../../../assets/img/projects/kenzie hub.png"
import nukenzie from "../../../assets/img/projects/nu kenzie.png"
import pokedex from "../../../assets/img/projects/pokedex.jpg"
import weartake from "../../../assets/img/projects/weartake.png"
import { ProjectCard } from "../../cards/ProjectCard/ProjectCard"



export const Projects = () => {

    return(
        <StyledProjects>
            <h3 className="projects">Alguns Projetos Realizados</h3>
            <div>
                <ProjectCard logo={kenziehub} text="Kenzie Hub" link="https://s3-12.vercel.app"/>
                <ProjectCard logo={nukenzie} text="Nu Kenzie" link="https://nu-kenzie-lac.vercel.app"/>
                <ProjectCard logo={pokedex} text="Pokedex" link="https://pokedex-nextjs-sage-three.vercel.app"/>
                <ProjectCard logo={weartake} text="Weartake" link="https://rafafreitasdev.github.io/weartake/"/> 
            </div>
                
        </StyledProjects>
    )
}