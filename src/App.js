import logo from './logo.svg';
import './App.css';
import LoginPage from './components/login/login';
import SignUp from './components/signup/signup';
import LanderPage from './pages/lander/lander';
import Header from './components/header/header';
import Book from './components/book/book';
import DashBoard from './pages/dashboard/dashboard';
import BookSummary from './components/booksummary/booksummary';
import MyCart from './components/mycart/mycart';
import RouterOne from './components/router/router';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <LoginPage /> */}
      {/* <SignUp /> */}
      {/* <LanderPage /> */}
      {/* <Header /> */}
      {/* <Book /> */}
      {/* <DashBoard /> */}
      {/* <BookSummary /> */}
      {/* <MyCart /> */}
      <RouterOne />
    </div>
  );
}

export default App;
