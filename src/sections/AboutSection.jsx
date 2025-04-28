import React from 'react'
import Section from '../components/Section'
import styled from 'styled-components'
import CardSkill from '../components/CardSkill'
import CardOtherSkill from '../components/CardOtherSkill'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9rem;
  width: 100%;
`
const StyledDivAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 80%;
`

const StyledName = styled.h2`
  font-size: 3rem;
  font-weight: 400;
  line-height: 100%;
  width: 100%;
`
const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 1.5rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.6;
`

const StyledDivLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;

  a {
    &:hover {
      text-decoration: underline;
    }
  }
`

function AboutSection() {
  const skills = [
    {
      icon: 'icons/php_laravel.svg',
      title: 'PHP & Laravel',
      text: 'Desenvolvimento de aplicações web eficientes para resolver problemas e criar soluções inovadoras.',
    },
    {
      icon: 'icons/typescript_react.svg',
      title: 'TypeScript & ReactJS',
      text: 'Criação de interfaces modernas e escaláveis com foco em performance e manutenção.',
    },
    {
      icon: 'icons/figma.svg',
      title: 'Figma',
      text: 'Prototipação e design de interfaces intuitivas, otimizando a experiência do usuário.',
    },
    {
      icon: 'icons/postgresql.svg',
      title: 'PostgreSQL',
      text: 'Gerenciamento robusto de dados relacionais com foco em segurança e alta disponibilidade.',
    },
    {
      icon: 'icons/linux.svg',
      title: 'Linux',
      text: 'Administração de ambientes de servidores e otimização de sistemas baseados em Linux.',
    },
    {
      icon: 'icons/docker.svg',
      title: 'Docker',
      text: 'Containerização de aplicações para ambientes de desenvolvimento e produção eficientes.',
    },
  ]

  const experiences = [
    {
      title: 'Tenho experiência com',
      items: [
        'Python',
        'PostgreSQL',
        'Servidores Linux',
        'Nginx',
        'Zabbix',
        'SCRUM',
        'API REST',
      ],
    },
    {
      title: 'Maior tempo de experiência com',
      items: [
        'HTML',
        'CSS',
        'TailwindCSS',
        'JavaScript',
        'PHP',
        'Laravel',
        'Livewire',
      ],
    },
    {
      title: 'Estou aprimorando',
      items: [
        'React',
        'TypeScript',
        'Java',
        'SpringBoot',
        'NodeJS',
        'CI/CD com AWS',
        'NestJS',
      ],
    },
  ]

  return (
    <Section id="about" title="Sobre Mim" alignTitle="flex-start">
      <StyledDiv>
        <StyledDivAbout>
          <StyledName>Gabriel Azevedo</StyledName>
          <StyledDescription>
            <p>
              Desde a infância, a tecnologia sempre fez parte da minha vida.
              Cresci mexendo em computadores, influenciado pelo meu pai, que era
              técnico em ADSL, e foi ali que surgiu minha curiosidade em
              entender como tudo funcionava.
            </p>
            <p>
              Apesar de ter convivido com uma família tradicionalmente ligada ao
              Direito e ao serviço público, decidi seguir meu próprio caminho.
              Entrei para o Exército Brasileiro em 2016, onde tive a
              oportunidade de crescer, me desenvolver pessoalmente e ser
              promovido a Sargento Temporário. Durante esse período, percebi que
              minha verdadeira vocação estava na tecnologia.
            </p>
            <p>
              A partir de 2022, comecei a me dedicar intensamente ao estudo de
              desenvolvimento web, com foco em PHP, Laravel, Docker e Linux. Em
              2023, finalizei meu ciclo no Exército para mergulhar de vez na
              área tech. Desde então, busco constantemente me aperfeiçoar, não
              só para ser um ótimo desenvolvedor, mas também para colaborar com
              soluções criativas, resolver problemas reais e contribuir com
              projetos de impacto.
            </p>
            <StyledDivLink>
              <a
                href="https://www.linkedin.com/in/azevedo2elve/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://www.github.com/azevedo2elve"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="mailto:azevedogabriel00@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </StyledDivLink>
          </StyledDescription>
        </StyledDivAbout>
        <CardSkill skills={skills} />
        <CardOtherSkill experiences={experiences} />
      </StyledDiv>
    </Section>
  )
}

export default AboutSection
