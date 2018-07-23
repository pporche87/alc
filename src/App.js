import React, { PureComponent } from 'react';
import './App.css';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import Stories from './components/Stories';
import Contact from './components/Contact';
import './public/css/style.css';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    // make call to wordpress to get data save in state
    console.log('the parent component mounted');
  }

  renderNavigation = () => (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item"><a href="#" className="navigation__link">Home</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link">Integrative Nutrition</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link">Offer</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link">Menu of Services</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link">Testimonials</a></li>
          <li className="navigation__item"><a href="#" className="navigation__link">Contact</a></li>
        </ul>
      </nav>
    </div>
  );

  renderHeader = () => (
    <header className="header">
      <div className="header__logo-box">
        <img src="img/logo-white.png" alt="Logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">AnitaLevitz</span>
          <span className="heading-primary--sub">Integrative Nutritionist</span>
        </h1>
        <a href="#section-services" className="btn btn--white btn--animated">Menu of Services</a>
      </div>
    </header>
  )

  render = () => {
    return (
      <div className="App">
        {this.renderNavigation()}
        {this.renderHeader()}
        <main>
          <About />
          <Features />
          <Services />
          <Stories />
          <Contact />
        </main>
      </div>
    );
  }
}

export default App;
