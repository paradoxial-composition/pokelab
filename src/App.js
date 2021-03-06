import './App.css';
import './assets/scss/global.scss'
import { BrowserRouter } from 'react-router-dom';

import PokeLayout from './components/PokeLayout';

function App() {
  return (
    <div className="App" style={{background: 'url(https://thumbs.dreamstime.com/b/dark-chrome-black-gear-background-texture-vector-illustration-eps-71328250.jpg)'}}>
        <BrowserRouter>
          <PokeLayout />
        </BrowserRouter>
    </div>
  );
}

export default App;
