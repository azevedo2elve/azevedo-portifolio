import React from 'react'
import styled from 'styled-components'

const StyledContainerSkill = styled.div`
  display: grid;
  gap: 4.6rem;
  width: 100%;

  grid-template-columns: repeat(3, minmax(300px, 1fr));

  @media (max-width: 1380px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }

  @media (max-width: 1020px) {
    grid-template-columns: 1fr;
  }
`

const StyledDivSkill = styled.div`
  border: 1px solid #00000024;
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
`

const StyledDivTextSkill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  border-left: 2px solid #00000040;
  padding: 2rem;

  h3 {
    font-size: 1.6rem;
    font-weight: 800;
    line-height: 100%;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 100%;
  }
`

function CardOtherSkill({ experiences }) {
  return (
    <StyledContainerSkill>
      {experiences.map((experience, index) => (
        <StyledDivSkill>
          <StyledDivTextSkill key={index} className="card">
            <h3>{experience.title}</h3>
            <ul>
              {experience.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </StyledDivTextSkill>
        </StyledDivSkill>
      ))}
    </StyledContainerSkill>
  )
}

export default CardOtherSkill
