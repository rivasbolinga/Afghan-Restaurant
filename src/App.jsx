import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
