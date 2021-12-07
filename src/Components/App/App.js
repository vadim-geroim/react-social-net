import './App.css';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';
import { Home } from '../Home/Home';
import { Profile } from '../Profile/Profile';
import { Posts } from '../Post/Posts';
import { Messages } from '../Messages/Messages';
import { Dialogs } from '../Dialogs/Dialogs';
import { Message } from '../Messages/Message/Message';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/dialogs/*" element={<Dialogs />} />
        </Routes>
      </main>
    </div>
  );
}






export default App;
