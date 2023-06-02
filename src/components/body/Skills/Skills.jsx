import { StyledSkills } from "./style"
import html from "../../../assets/img/skills/html.png"
import css from "../../../assets/img/skills/css.png"
import javascript from "../../../assets/img/skills/javascript.png"
import react from "../../../assets/img/skills/reactjs.png"
import typescript from "../../../assets/img/skills/typescript.png"
import next from "../../../assets/img/skills/nextjs.png"
import sass from "../../../assets/img/skills/sass.png"
import node from "../../../assets/img/skills/node +express.png"
import sql from "../../../assets/img/skills/sql.png"
import orm from "../../../assets/img/skills/orm.png"
import python from "../../../assets/img/skills/python.png"
import django from "../../../assets/img/skills/django.png"
import api from "../../../assets/img/skills/api rest.png"
import git from "../../../assets/img/skills/github.png"
import { SkillCard } from "../../cards/SkillCard/SkillCard"


export const Skills = () => {

    return(
        <StyledSkills>
            <h3 className="skills">Skills</h3>
            <div>
            <SkillCard logo={html} text="HTML"/>
                <SkillCard logo={css} text="CSS"/>
                <SkillCard logo={javascript} text="Java Script"/>
                <SkillCard logo={react} text="ReactJs"/>
                <SkillCard logo={typescript} text="Type Script"/>
                <SkillCard logo={next} text="Next.Js"/>
                <SkillCard logo={sass} text="SASS"/>
                <SkillCard logo={node} text="Node.Js Express"/>
                <SkillCard logo={sql} text="SQL"/>
                <SkillCard logo={orm} text="ORM"/>
                <SkillCard logo={python} text="Python"/>
                <SkillCard logo={django} text="Django"/>
                <SkillCard logo={api} text="API Rest"/>
                <SkillCard logo={git} text="GitHub"/>
            </div>
                
        </StyledSkills>
    )
}