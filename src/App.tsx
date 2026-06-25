import Text from './components/Text.tsx'
import Input from './components/input.tsx'
import Globalstyded from './Globalstyles.js'
import styled from 'styled-components'

function App() {

  return (
    <>
    <Globalstyded/>

    
    <StyledApp>
    <Text/>
    <Input/>
    </StyledApp>
    </>
  )
}

const StyledApp = styled.div`

  @media (max-width: 1500px) {
  flex-direction: column;
    
  }

  @media (min-width: 1500px) {

      display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
    
  }
`

export default App

