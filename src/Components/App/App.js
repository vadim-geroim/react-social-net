import './App.css';
import logo from './Samurai-Logo.png';
import ava from './user-picture.png';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <a href="#">
          <img src={logo} alt="Logo" />
        </a>
      </header>
      <div className="nav">
        <a className="nav-link" href="#">Profile</a>
        <a className="nav-link" href="#">Messages</a>
        <a className="nav-link" href="#">News</a>
        <a className="nav-link" href="#">Music</a>
        <a className="nav-link" href="#">Settings</a>
      </div>
      <main className="main">
        <div className="main-hero">
          <img src="https://picsum.photos/id/103/1050/100" alt="Main photo" />
        </div>
        <div className="profile">
          <div className="ava-wrapper">
            <img src={ava} alt="Profile picture" />
          </div>
          <div className="profile-info">
            <h2 className="profile-name">Bob Jackson</h2>
            <h3 className="profile-dob">Date of birth: <span>5 May 2001</span></h3>
            <h3 className="profile-city">City: <span>New York</span></h3>
            <h3 className="profile-degree">Education: <span>Bachelor Degree in Computer Science</span></h3>
            <h3 className="profile-site">https://google.com</h3>
          </div>
        </div>
        <div className="posts">
          <h2 className="posts-title">My posts</h2>
          <div className="post-field">
          </div>
          <a className="post-btn" href="#">Send</a>
        </div>
        <div className="messages">
          <div className="message-wrapper">
            <img src="#" alt="Message icon" />
            <p className="message">Hello world</p>
          </div>
        </div>
      </main>
    </div>
  );
}






export default App;
