import './App.css';
import { GlobalStyle } from './components/style/style';
import { GetApi } from './components/service/getApi';

function App() {

  return (
    <>
      <GlobalStyle />
      <GetApi/>
    </>
  )
}

export default App