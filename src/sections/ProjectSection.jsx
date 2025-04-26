import React from 'react'
import Section from '../components/Section'
import CardProject from '../components/CardProject'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  gap: 8rem;

  @media (max-width: 1170px) {
    grid-template-columns: 1fr;
  }
`

function ProjectSection() {
  return (
    <Section id="projects" title="Projetos" alignTitle="flex-end">
      <StyledDiv>
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
      </StyledDiv>
    </Section>
  )
}

export default ProjectSection
