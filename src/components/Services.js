import React, { PureComponent } from 'react';

class Services extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render = () => (
    <section className="section-services" id="section-services">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Menu of Services
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">Comprehensive Consultation</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Up to 60 minutes</li>
                  <li>Three-day dietary analysis</li>
                  <li>Detailed assessment</li>
                  <li>Individualized recommendations</li>
                  <li>Summary of your appointment</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$297</p>
                </div>
                <a href="#popup" className="btn btn--white">Book now!</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--2">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--2">Mini Consultation</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Up to 45 minutes</li>
                  <li>Learn foods that help specific concerns</li>
                  <li>Review and optomize diet</li>
                  <li>Manage health concerns</li>
                  <li>Detox and weight management</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$165</p>
                </div>
                <a href="#popup" className="btn btn--white">Book now!</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--3">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--3">Home Visit</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Up to 60 minutes</li>
                  <li>Pantry clean out and makeover</li>
                  <li>Grocery store visit</li>
                  <li>Cooking lessons</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$300</p>
                </div>
                <a href="#popup" className="btn btn--white">Book now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn btn--purple">Discover all programs</a>
      </div>
    </section>
  );
}

export default Services;