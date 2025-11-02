import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;