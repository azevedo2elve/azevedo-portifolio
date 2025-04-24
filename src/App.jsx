import Nav from './components/Nav'
import HomeSection from './sections/HomeSection'
import styled from 'styled-components'

const StyledApp = styled.div`
  margin: 0 7.2rem 0;
`

function App() {
  return (
    <StyledApp>
      <Nav />
      <HomeSection />
    </StyledApp>
  )
}

export default App
