import React from 'react'
import styled from 'styled-components'

// Skills
const StyledSkills = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`

const StyledDivSkill = styled.div`
  display: flex;
  border: 1px solid #00000040;
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  width: 100%;
  max-width: 300px;
`

const StyledContainerCardSkill = styled.div`
  display: flex;
  align-items: center;
  gap: 1.7rem;
`

const StyledIconSkill = styled.div`
  height: 5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const StyledDivTextSkill = styled.div`
  padding-left: 1.7rem;
  border-left: 1px solid #00000040;
  text-align: left;
`

const StyledTitleSkill = styled.h3`
  font-size: 1.6rem;
  font-weight: 800;
`

const StyledTextSkill = styled.p`
  font-size: 0.9rem;
  color: #555;
`

function CardSkill({ skills }) {
  return (
    <StyledSkills>
      {skills.map((skill, index) => (
        <StyledDivSkill key={index}>
          <StyledContainerCardSkill>
            <StyledIconSkill>
              <img src={skill.icon} alt={skill.title} />
            </StyledIconSkill>
            <StyledDivTextSkill>
              <StyledTitleSkill>{skill.title}</StyledTitleSkill>
              <StyledTextSkill>{skill.text}</StyledTextSkill>
            </StyledDivTextSkill>
          </StyledContainerCardSkill>
        </StyledDivSkill>
      ))}
    </StyledSkills>
  )
}

export default CardSkill
