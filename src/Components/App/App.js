import './App.css';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';
import { Home } from '../Home/Home';
import { Profile } from '../Profile/Profile';
import { Posts } from '../Post/Posts';
import { DialogsContainer } from '../Dialogs/DialogsContainer';
import { Routes, Route } from 'react-router-dom';

function App(props) {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/dialogs/*" element={<DialogsContainer />} />
        </Routes>
      </main>
    </div>
  );
}






export default App;
