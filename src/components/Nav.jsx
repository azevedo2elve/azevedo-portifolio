import styled from 'styled-components'
import { Link } from 'react-scroll'

const StyledNav = styled.nav`
  transform: rotate(-90deg);
  display: block;
  position: fixed;
  top: 50%;
  left: 0;
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
  return (
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
  )
}

export default Header
