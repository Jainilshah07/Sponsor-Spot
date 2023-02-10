import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Profile from './components/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Card from './pages/Card';
import Wsponsorlist from './components/Wsponsorlist';
import Sponsorlist from './components/Sponsorlist';
import Sponsor from './pages/Sponsor';
import Wantsponsor from './pages/Wantsponsor';
import Footer from './components/Footer';
import Signup from './pages/Login/Signup';
import Complain from './components/Complain';
import History from './components/History';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/profile" element={<Profile />}> </Route>
          <Route exact path="/history" element={<History />}> </Route>
          <Route exact path="/card" element={<Card />}> </Route>
          <Route exact path="/avail-a-sponsorship" element={<Wantsponsor />}> </Route>
          <Route exact path="/avail-sponser-list" element={<Wsponsorlist />}> </Route>
          <Route exact path="/become-a-sponsor" element={<Sponsor />}> </Route>
          <Route exact path="/ur-sponsor-list" element={<Sponsorlist />}> </Route>
          <Route exact path="/signup" element={<Signup />}> </Route>
          <Route exact path="/complain" element={<Complain />}> </Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
