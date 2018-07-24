import React, { PureComponent } from 'react';

class Stories extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render = () => (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={require("../public/img/Playful_Sunday.mp4")} type="video/mp4" />
          <source src={require("../public/img/Playful_Sunday.webm")} type="video/webm" />
            Your browser is not supported!
        </video>
      </div>
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">What people are saying</h2>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={require("../public/img/brennan.jpg")} alt="picture of customer" className="story__img" />
            <figcaption className="story__caption">Brennan Rose</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">I haven't slept with well in ages</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda consequuntur omnis dolorum molestias nemo laboriosam eligendi modi debitis consequatur.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={require("../public/img/patrick.png")} alt="picture of customer" className="story__img" />
            <figcaption className="story__caption">Patrick Porche</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">I have so much energy in the mornings now</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum assumenda consequuntur omnis dolorum molestias nemo laboriosam eligendi modi debitis consequatur.</p>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn-text">Read more stories &rarr;</a>
      </div>
    </section>
  );
}

export default Stories;