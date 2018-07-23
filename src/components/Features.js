import React, { PureComponent } from 'react';

class Features extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render = () => (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-world"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Eat well</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium in necessitatibus officiis temporibus debitis iure reprehenderit!
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-heart"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Move well</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium in necessitatibus officiis temporibus debitis iure reprehenderit!
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-cloud"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Think well</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium in necessitatibus officiis temporibus debitis iure reprehenderit!
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-star"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Be well</h3>
            <p className="feature-box__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium in necessitatibus officiis temporibus debitis iure reprehenderit!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;