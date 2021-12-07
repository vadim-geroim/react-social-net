import './App.css';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';
import { Home } from '../Home/Home';
import { Profile } from '../Profile/Profile';
import { Posts } from '../Post/Posts';
import { Dialogs } from '../Dialogs/Dialogs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const dialogList = [
    { id: 1, name: "Super User" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
    { id: 4, name: "User 4" },
  ]

  const messageList = [
    { id: 1, data: "Hello world." },
    { id: 2, data: "What is going on? " },
    { id: 3, data: "I'm so happy to see you!" }
  ]

  const postMessages = [
    { id: 1, data: "Hello my friend!" },
    { id: 2, data: "What's going on?" },
    { id: 3, data: "How was your trip to Europe? " }
  ]

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/posts" element={<Posts postMessages={postMessages} />} />
          <Route path="/dialogs/*" element={<Dialogs dialogList={dialogList} messageList={messageList} />} />
        </Routes>
      </main>
    </div>
  );
}






export default App;
