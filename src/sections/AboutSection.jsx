import React from 'react'
import Section from '../components/Section'
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
`
const StyledDivAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 50%;
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
  font-family: 'Manrope', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.6;
`

function AboutSection() {
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
          </StyledDescription>
        </StyledDivAbout>
      </StyledDiv>
    </Section>
  )
}

export default AboutSection
