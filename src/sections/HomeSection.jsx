import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  font-family: 'Manrope', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
`

const StyledLogo = styled.h2`
  font-weight: 800;
  font-size: 3.6rem;
  line-height: 100%;
  margin: 2rem 2rem;
`

const StyledH1 = styled.h1`
  font-family: 'DotGothic16', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 4.5rem;
  line-height: 100%;
  width: 100%;
  height: 100%;
`

const StyledName = styled.h2`
  font-family: 'DotGothic16', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 100%;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
`

function HomeSection() {
  const [title, setTitle] = useState('')
  const fullTitle = 'full-stack. web (developer)'
  const [name, setName] = useState('')
  const fullName = 'Gabriel Azevedo'

  useEffect(() => {
    let indexTitle = 0
    let indexName = 0

    const interval = setInterval(() => {
      if (indexTitle < fullTitle.length) {
        let title = fullTitle.slice(0, indexTitle + 1)
        setTitle(title)
        indexTitle++
      } else if (indexName < fullName.length) {
        let name = fullName.slice(0, indexName + 1)
        setName(name)
        indexName++
      } else {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <StyledHeader>
      <div className="w-full">
        <StyledLogo>DNC</StyledLogo>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <StyledH1>{title}</StyledH1>
        <StyledName>{name}</StyledName>
      </div>
    </StyledHeader>
  )
}

export default HomeSection
