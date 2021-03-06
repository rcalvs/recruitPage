import { Switch, Route } from "react-router-dom";
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Section from './components/Section';
import HeaderImg from './imgs/investors_xl_lg.jpg';

function App() {
  return (
    <Switch>
      <Route exact path="/" basename="/">
        <div className="App">
          <Header />
          <div className="bg-blue-800">
            <img src={HeaderImg} alt="Header Img"/>
          </div>
          <Banner />
          <Section />
          <Footer />
         </div>
      </Route>
      <Route path="/recruitPage/cadastro">
        <div className="App">
          <Header />
          <Form />
          <Footer />
         </div>
      </Route>
      <Route path="/cadastro" basename="/cadastro">
        <div className="App">
          <Header />
          <Form />
          <Footer />
         </div>
      </Route>
    </Switch>
  );
}

export default App;
