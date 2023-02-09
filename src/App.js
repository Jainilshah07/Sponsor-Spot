import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Profile from './components/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/profile" element={<Profile />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
