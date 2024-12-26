import React, { Component } from "react";

class Certifications extends Component {
  render() {
    if (this.props.sharedCertifications) {
      var skills = this.props.sharedCertifications.map(function (
        certification,
        i
      ) {
        return (
          <li className="list-inline-item mx-5" key={i}>
            <span>
              <div className="text-center">
                <div>
                  <img src={certification.url} alt={certification.name} />
                  <p className="mt-5">{certification.name}</p>
                </div>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Certifications;
