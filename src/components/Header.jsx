import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'

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

const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
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

const StyledNav = styled.nav`
  transform: rotate(-90deg);
`

const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  list-style: none;
  padding: 0;
  margin: 0;

  .link {
    font-size: 1.4rem;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`

function Header() {
  const [title, setTitle] = useState('')
  const fullTitle = 'full-stack. web (developer)'

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullTitle.length) {
        let title = fullTitle.slice(0, index + 1)
        setTitle(title)
        index++
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

      <StyledDiv>
        <div className="h-full w-1/12 flex items-center justify-center">
          <StyledNav>
            <StyledUl>
              <Link to="contact" smooth duration={500} className="link">
                Contato
              </Link>
              <Link to="about" smooth duration={500} className="link">
                Sobre Mim
              </Link>
              <Link to="projects" smooth duration={500} className="link">
                Projetos
              </Link>
              <Link to="home" smooth duration={500} className="link">
                Home
              </Link>
            </StyledUl>
          </StyledNav>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <StyledH1>{title}</StyledH1>
        </div>
      </StyledDiv>
    </StyledHeader>
  )
}

export default Header
