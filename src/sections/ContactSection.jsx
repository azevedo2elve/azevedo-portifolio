import React from 'react'
import styled from 'styled-components'
import Section from '../components/Section'

const StyledList = styled.li`
  display: flex;
  justify-content: center;
  gap: 8.5rem;
`

const StyledImg = styled.img`
  width: 5rem;
`

function ContactSection() {
  return (
    <Section id="contact" title="Contato" alignTitle="center">
      <ul>
        <StyledList>
          <a href="https://github.com/azevedo2elve" target="_blank">
            <StyledImg src="icons/github.svg" alt="github" />
          </a>
          <a href="https://linkedin.com/in/azevedo2elve" target="_blank">
            <StyledImg src="icons/linkedin.svg" alt="linkedin" />
          </a>
          <a href="mailto:azevedogabriel00@gmail.com" target="_blank">
            <StyledImg src="icons/gmail.svg" alt="gmail" />
          </a>
          <a
            href="https://wa.me/5551995141997?text=Olá!%20Vim%20através%20do%20seu%20site%2C%20gostaria%20de%20tirar%20uma%20dúvida..."
            target="_blank"
          >
            <StyledImg src="icons/whatsapp.svg" alt="whatsapp" />
          </a>
        </StyledList>
      </ul>
    </Section>
  )
}

export default ContactSection
