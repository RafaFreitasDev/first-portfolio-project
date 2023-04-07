import { useContext } from "react";
import { Moldura } from "../Moldura/Moldura";
import { StyledPerfil } from "./style";
import { LanguageContext } from "../../../context/language";

export const Perfil = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <StyledPerfil>
      <Moldura />
      <div>
        {lang == "port" ? (
          <h3>
            <span className="title">Olá,</span>
            <br />
            meu nome é <span className="neg">Rafael Freitas</span>,
            Desenvolvedor <span className="neg">FullStack</span> em formação, já
            graduado como Desenvolvedor <span className="neg">Front End</span>.
            Formado em Eng. Mecânica, bom em trabalhar em equipe, fácil
            comunicação e versátil em solucionar problemas. Sempre buscando
            melhorias, com muito foco e disciplina para adquirir novos
            conhecimentos.
          </h3>
        ) : (
          <h3>
            <span className="title">Hello,</span>
            <br />
            my name is <span className="neg">Rafael Freitas</span>. I am a{" "}
            <span className="neg">FullStack</span> Developer in training, and I
            have already graduated as <span className="neg">Front End</span>{" "}
            Developer and Mechanical Engineering. I am good at work-team with
            easy communication and versatile in problema solving. I am always
            looking for improvements, with focus and discipline to acquire new
            knowledge.
          </h3>
        )}
      </div>
    </StyledPerfil>
  );
};
