import { Counter } from "./features/counter/Counter"
import styled from "styled-components"

const PageContainer = styled("div")`
  border: 5px solid red;
`

function App() {
  return (
    <PageContainer>
      <Counter />
      <p>this is a test</p>
    </PageContainer>
  )
}

export default App
