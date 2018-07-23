import React, { PureComponent } from 'react';

class About extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render = () => (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          integrative nutrition
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">Your personalized nutrition blueprint</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate optio corporis, quae voluptatibus hic quo sint odit ipsum quibusdam id adipisci vero laborum perferendis dignissimos veniam ratione tenetur incidunt consequuntur.
          </p>
          <h3 className="heading-tertiary u-margin-bottom-small">Explore an integrative approach</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate optio corporis, quae voluptatibus
          </p>
          <a href="#" className="btn-text">Learn more &rarr;</a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img src="img/nut-1.jpg" alt="Photo 1" className="composition__photo composition__photo--p1" />
            <img src="img/nut-2.jpg" alt="Photo 2" className="composition__photo composition__photo--p2" />
            <img src="img/nut-3.jpg" alt="Photo 3" className="composition__photo composition__photo--p3" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;