import './App.css';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';
import { Profile } from '../Profile/Profile';
import { Post } from '../Post/Post';
import { Messages } from '../Messages/Messages';
import { Dialogs } from '../Dialogs/Dialogs';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <main className="main">
        {/* <Messages />
        <Post />
        <Profile /> */}
        <Dialogs />
      </main>
    </div>
  );
}






export default App;
