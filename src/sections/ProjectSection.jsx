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
          image="images/sas-ait.png"
          tags={['PHP', 'Laravel', 'Docker', 'SQL']}
          title="SAS AIT"
          link="https://github.com/azevedo2elve/sas-ait"
          description="Este projeto foi criado para que na empresa o suporte possa ter algumas funções sem precisar escrever a query SQL, apenas usando interface gráfica. Ele foi feito em Laravel e montei um container em docker para rodar no servidor e como existem vários servidores de outros clientes, escolhi o docker para poder rodar em qualquer SO."
        />
        <CardProject
          image="images/watcher_logs.jpg"
          tags={['Python', 'Linux']}
          title="Watcher Logs"
          link="https://github.com/azevedo2elve/watcher_logs"
          description="Script criado em Python para visualização de logs nos servidores sem precisar sair do seu ambiente local. A interface é feita apenas no terminal, apenas para selecionar as opções adicionadas e conseguir ver os logs dos serviços que contém no servidor."
        />
        <CardProject
          image="images/optica_lider.png"
          tags={['Laravel', 'TailwindCSS']}
          title="Ecommerce [privado - construção]"
          description="Este é um projeto de ecommerce que estou em andamento, conforme veio a necessidade da loja precisa de um ecommerce e aceitei o desafio para fazer um em PHP e Laravel."
        />
        <CardProject
          image="images/down_tube.png"
          tags={['PHP', 'Laravel']}
          title="Down Tube"
          link="https://github.com/azevedo2elve/down-php-tube"
          description="Este projeto foi criado apenas com o intuito de eu conseguir baixar vídeos do YouTube."
        />
      </StyledDiv>
    </Section>
  )
}

export default ProjectSection
