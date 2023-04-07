import { StyledContainer } from "./style";
import { Perfil } from "./components/body/Perfil/Perfil";
import { Contacts } from "./components/body/Contacts/Contacts";
import { GlobalStyle } from "./globalStyle";
import { ResetStyle } from "./reset";
import { Skills } from "./components/body/Skills/Skills";
import { Projects } from "./components/body/Projects/Projects"
import { useContext } from "react";
import { LanguageContext } from "./context/language";


function App() {

  const {toPortuguese, toEnglish} = useContext(LanguageContext)

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <StyledContainer >
        <div className="btnBox">
          <button onClick={()=>toPortuguese()}>Português</button>
          <button onClick={()=>toEnglish()}>English</button>
        </div>
        <div className="box">
          <Perfil />
          <Contacts />
        </div>
        <Skills/>
        <Projects/>
      </StyledContainer>
    </>
  );
}

export default App;
