import React from 'react'
import Styled from 'styled-components'

const StyledSection = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 8rem;
  height: auto;
  width: 100%;
  margin-bottom: 8rem;`

const StyledDivTitle = Styled.div`
  display: flex;
  justify-content: ${(props) => props.alignTitle};
  align-items: center;
  width: 100%;`

const StyledTitle = Styled.h2`
    font-size: 3rem;
    font-weight: 800;

    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.alignTitle};
    gap: 1rem;`

const StyledHr = Styled.hr`
  height: 0.7rem;
  width: 9rem;
  background-color: #000;`

function Section({ id, title, alignTitle, children }) {
  return (
    <StyledSection id={id}>
      <StyledDivTitle alignTitle={alignTitle}>
        <StyledTitle alignTitle={alignTitle}>
          {title}
          <StyledHr />
        </StyledTitle>
      </StyledDivTitle>
      {children}
    </StyledSection>
  )
}

export default Section
