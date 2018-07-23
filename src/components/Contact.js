import React, { PureComponent } from 'react';

class Contact extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render = () => (
    <section class="section-contact">
      <div class="row">
        <div class="contact">
          <div class="contact__form">
            <div class="u-margin-bottom-medium">
              <h2 class="heading-secondary">
                Get in touch!
              </h2>
            </div>
            <form action="#" class="form">
              <div class="form__group">
                <input type="text" class="form__input" placeholder="Full name" id="name" required />
                <label for="name" class="form__label">Full name</label>
              </div>
              <div class="form__group">
                <input type="email" class="form__input" placeholder="Email address" id="email" required />
                <label for="email" class="form__label">Email address</label>
              </div>
              <div class="form__group u-margin-bottom-medium">
                <div class="form__radio-group">
                  <input type="radio" class="form__radio-input" id="consultation" name="appt-type" />
                  <label for="consultation" class="form__radio-label">
                    <span class="form__radio-button"></span>
                    Consultation
                  </label>
                </div>
                <div class="form__radio-group">
                  <input type="radio" class="form__radio-input" id="follow-up" name="appt-type" />
                  <label for="follow-up" class="form__radio-label">
                    <span class="form__radio-button"></span>
                    Follow-up
                  </label>
                </div>
              </div>
              <div class="form__group">
                <button class="btn btn--purple">Get in touch &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;