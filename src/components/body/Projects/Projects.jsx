import { StyledProjects } from "./style"
import kenziehub from "../../../assets/img/projects/kenzie hub.png"
import nukenzie from "../../../assets/img/projects/nu kenzie.png"
import pokedex from "../../../assets/img/projects/pokedex.jpg"
import kenziburguer from "../../../assets/img/projects/kenzie burguer.png"
import { ProjectCard } from "../../cards/ProjectCard/ProjectCard"
import { useContext } from "react"
import { LanguageContext } from "../../../context/language"



export const Projects = () => {

    const {lang} = useContext(LanguageContext)

    return(
        <StyledProjects>
            {lang=="port"?<h3 className="projects">Alguns Projetos Realizados</h3>:<h3 className="projects">Some Projects</h3>}
            <div>
                <ProjectCard logo={kenziehub} text="Kenzie Hub" link="https://s3-12.vercel.app"/>
                <ProjectCard logo={nukenzie} text="Nu Kenzie" link="https://nu-kenzie-lac.vercel.app"/>
                <ProjectCard logo={pokedex} text="Pokedex" link="https://pokedex-nextjs-sage-three.vercel.app"/>
                <ProjectCard logo={kenziburguer} text="Kenzie Burguer" link="https://s2-16.vercel.app"/> 
            </div>
                
        </StyledProjects>
    )
}