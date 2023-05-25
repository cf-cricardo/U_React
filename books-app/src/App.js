import './App.css';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import MyBooks from './components/MyBooks';
import BestAuthor from './components/BestAuthor';
import MostPopular from './components/MostPopular';

function App() {
  return (
    <div className="container-fluid container-section">
      <Header />
      <MyBooks />
      <br></br>
      <BestAuthor />
      <br></br>
      <h4>Most Popular</h4>
      <MostPopular />
      <br></br>
      <MostPopular />
    </div>
  );
}

export default App;