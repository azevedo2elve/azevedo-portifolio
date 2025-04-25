import Nav from './components/Nav'
import HomeSection from './sections/HomeSection'
import Section from './sections/Section'
import CardProject from './components/CardProject'

// styles
import styled from 'styled-components'

const StyledApp = styled.div`
  margin: 0 7.2rem;

  @media (max-width: 1050px) {
    margin: 0 2rem;
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
        <Section id="projects" title="Projetos" alignTitle="flex-end">
          <CardProject
            image="https://placehold.co/150"
            tags={['JavaScript', 'HTML', 'CSS']}
            title="Meu Projeto"
            description="Este é um projeto incrível que utiliza tecnologias modernas para criar uma experiência incrível para os usuários."
          />
          <CardProject
            image="https://placehold.co/150"
            tags={['PHP', 'Laravel']}
            title="Outro Projeto"
            description="Este projeto foi desenvolvido com PHP e Laravel para criar uma aplicação robusta e escalável."
          />
          <CardProject
            image="https://placehold.co/150"
            tags={['TypeScript', 'Laravel', 'React', 'Node', 'Express']}
            title="Outro Projeto Incrível"
            description="Este é um projeto incrível que utiliza tecnologias modernas para criar uma experiência incrível para os usuários."
          />
          <CardProject
            image="https://placehold.co/150"
            tags={['VueJS', 'Laravel']}
            title="Outro Projeto Incrível"
            description="Este é um projeto incrível que utiliza tecnologias modernas para criar uma experiência incrível para os usuários."
          />
          <CardProject
            image="https://placehold.co/150"
            tags={['Laravel', 'React']}
            title="Outro Projeto Incrível"
            description="Este é um projeto incrível que utiliza tecnologias modernas para criar uma experiência incrível para os usuários."
          />
        </Section>
      </StyledMain>
    </StyledApp>
  )
}

export default App
