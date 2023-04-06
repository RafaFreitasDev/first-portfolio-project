import { StyledContainer } from "./style";
import { Header } from "./components/body/Header/Header";
import { Perfil } from "./components/body/Perfil/Perfil";
import { Contacts } from "./components/body/Contacts/Contacts";
import { GlobalStyle } from "./globalStyle";
import { ResetStyle } from "./reset";
import { Skills } from "./components/body/Skills/Skills";
import { Projects } from "./components/body/Projects/Projects"

function App() {
  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <Header />
      <StyledContainer>
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
