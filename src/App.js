import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Number from './components/Number';
import Tabled from './components/Tabled';
import States from './components/States';
import Counter from './components/Counter';
import Names from './components/Names';
import Input from './components/Input';
import Twotext from './components/Twotext';
import Validation from './components/Validation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Validation></Validation>}> </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
