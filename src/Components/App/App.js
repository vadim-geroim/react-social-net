import './App.css';
import { Header } from '../Header/Header';
import { Navbar } from '../Navbar/Navbar';
import { Home } from '../Home/Home';
import { Profile } from '../Profile/Profile';
import { Posts } from '../Post/Posts';
import { Dialogs } from '../Dialogs/Dialogs';
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
          <Route path="/posts" element={<Posts postPage={props.state.postPage} addPost={props.addPost} changeTextAreaValue={props.changeTextAreaValue} />} />
          <Route path="/dialogs/*" element={<Dialogs dialogPage={props.state.dialogPage} />} />
        </Routes>
      </main>
    </div>
  );
}






export default App;
