import logo from './logo.svg';
import styled from 'styled-components'

const AppStyle = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  background-color: rgb(197, 197, 166);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Image = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: Image-spin infinite 20s linear;

  @keyframes Image-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`

const AppLink = styled.a`
  color: #61dafb;
`

function App() {
  return (
    <AppStyle>
      <AppHeader>
        <Image src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <AppLink href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </AppLink>
      </AppHeader>
    </AppStyle>
  );
}

export default App;
