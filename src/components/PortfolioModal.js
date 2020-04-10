import React from "react";

export default function PortfolioModal(props) {
  return (
    <div
      className="portfolio-modal modal fade"
      id={`portfolioModal${props.content.id}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="portfolioModal1Label"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <button
            className="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">
              <i className="fas fa-times"></i>
            </span>
          </button>
          <div className="modal-body text-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  {/* <!-- Portfolio Modal - Title--> */}
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                    {props.content.title}
                  </h2>
                  {/* <!-- Icon Divider--> */}
                  <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                      <i className="fas fa-dice-one"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                  </div>
                  {/* <!-- Portfolio Modal - Image--> */}
                  <img
                    className="img-fluid rounded mb-5"
                    src={props.content.imgSrc}
                    alt=""
                  />
                  {/* <!-- Portfolio Modal - Text--> */}
                  <p className="mb-0">{props.content.body}</p>
                  <div className="d-flex justify-content-center my-4">
                    <a
                      className="btn btn-outline-secondary btn-social mx-1"
                      href={props.content.git}
                    >
                      <i className="fab fa-fw fa-github"></i>
                    </a>
                    <a
                      className="btn btn-outline-secondary btn-social mx-1"
                      href={props.content.deploy}
                    >
                      <i className="far fa-window-restore"></i>
                    </a>
                  </div>
                  <button
                    className="btn btn-primary"
                    href="#"
                    data-dismiss="modal"
                  >
                    <i className="fas fa-times fa-fw"></i>Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
