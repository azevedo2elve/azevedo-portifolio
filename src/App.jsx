import Header from './components/Header'
import styled from 'styled-components'

const StyledApp = styled.div`
  margin: 0 7.2rem 0;
`

function App() {
  return (
    <StyledApp>
      <Header />
    </StyledApp>
  )
}

export default App
