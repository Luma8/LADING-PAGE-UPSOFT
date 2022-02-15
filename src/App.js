import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";
import Rotas from '../src/routes/Rotas';

function App() {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
