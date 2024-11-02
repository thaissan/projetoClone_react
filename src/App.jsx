import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { TwitchLogin } from './pages/Login';
import { TwitchHome } from './pages/Home';
import { HeaderComponent } from './components/HeaderComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/login" element={<TwitchLogin />} />
          <Route path="/home" element={<TwitchHome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
