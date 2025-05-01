import Nav from './components/Nav'
import HomeSection from './sections/HomeSection'
import ProjectSection from './sections/ProjectSection'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'

// styles
import styled from 'styled-components'

const StyledApp = styled.div`
  margin: 0 7.2rem;

  @media (max-width: 1050px) {
    margin: 0 4rem;
  }
`
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 12rem;

  @media (max-width: 850px) {
    margin: 0 0 0 12rem;
  }
`

function App() {
  return (
    <StyledApp>
      <Nav />
      <HomeSection />
      <StyledMain>
        <ProjectSection />
        <AboutSection />
        <ContactSection />
      </StyledMain>
    </StyledApp>
  )
}

export default App
