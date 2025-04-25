import React from 'react'
import Styled from 'styled-components'

const StyledSection = Styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
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

const StyledDiv = Styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(300px, 1fr));
gap: 8rem;

@media (max-width: 1170px) {
  grid-template-columns: 1fr;
}
`

function Section({ id, title, alignTitle, children }) {
  return (
    <StyledSection id={id}>
      <StyledDivTitle alignTitle={alignTitle}>
        <StyledTitle alignTitle={alignTitle}>
          {title}
          <StyledHr />
        </StyledTitle>
      </StyledDivTitle>
      <StyledDiv>{children}</StyledDiv>
    </StyledSection>
  )
}

export default Section
