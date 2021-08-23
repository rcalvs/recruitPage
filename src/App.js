import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
// import Form from './components/Form';
import Header from './components/Header';
import Section from './components/Section';
import HeaderImg from './imgs/investors_xl_lg.jpg';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="bg-blue-800">
        <img src={HeaderImg} alt="Header Img"/>
      </div>
      <Banner />
      <Section />
      {/* <Form /> */}
      <Footer />
    </div>
  );
}

export default App;
