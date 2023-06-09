import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/main/Main';
import Friends from './components/main/Friends';
import Details from './components/shared/Details';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/pets' element={<Friends />} />
        <Route path='/card/:animalId' element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
