import React, { PureComponent } from 'react';

class Contact extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render = () => (
    <section className="section-contact">
      <div className="row">
        <div className="contact">
          <div className="contact__form">
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">
                Get in touch!`
              </h2>
            </div>
            <form action="#" className="form">
              <div className="form__group">
                <input type="text" className="form__input" placeholder="Full name" id="name" required />
                <label htmlFor="name" className="form__label">Full name</label>
              </div>
              <div className="form__group">
                <input type="email" className="form__input" placeholder="Email address" id="email" required />
                <label htmlFor="email" className="form__label">Email address</label>
              </div>
              <div className="form__group u-margin-bottom-medium">
                <div className="form__radio-group">
                  <input type="radio" className="form__radio-input" id="consultation" name="appt-type" />
                  <label htmlFor="consultation" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Consultation
                  </label>
                </div>
                <div className="form__radio-group">
                  <input type="radio" className="form__radio-input" id="follow-up" name="appt-type" />
                  <label htmlFor="follow-up" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Follow-up
                  </label>
                </div>
              </div>
              <div className="form__group">
                <button className="btn btn--purple">Get in touch &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;