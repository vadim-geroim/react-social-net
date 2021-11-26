import './App.css';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';
import { Profile } from '../Profile/Profile';
import { Post } from '../Post/Post';
import { Messages } from '../Messages/Messages';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <main className="main">
        <div className="main-hero">
          <img src="https://picsum.photos/id/103/1050/100" alt="Main photo" />
        </div>
        <Profile />
        <Post />
        <Messages />
      </main>
    </div>
  );
}






export default App;
