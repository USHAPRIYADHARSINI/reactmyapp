import React from 'react'

function Pricecard(props) {
  return <>
        {/* <!-- FreeTier --> */}
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.data.package}</h5>
            <h6 className="card-price text-center">${props.data.cost}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
                <li className={props.data.userEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.storageEnabler?"fas fa-check fa-bold":"fas fa-times"}></i></span><span className={props.data.userHighlighter?"fw-bold":""}>{props.data.storage}</span></li>
                <li className={props.data.storageEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.user}</li>
                <li className={props.data.projectsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.projectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.projects}</li>
                <li className={props.data.accessEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.accessEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.access}</li>
                <li className={props.data.privateProjectsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.privateProjectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.privateProjects}</li>
                <li className={props.data.phoneSupportEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.phoneSupportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.phoneSupport}</li>
                <li className={props.data.subdomainEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.subdomainEnabler?"fas fa-check":"fas fa-times"}></i></span><span className={props.data.subdomainHighlighter?"fw-bold":""}>{props.data.subdomain}</span>Free Subdomain</li>
                <li className={props.data.monthlyReportEnabler?"":"text-muted"}><span className="fa-li"><i className={props.data.monthlyReportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.data.monthlyReport}</li>
            </ul>
            <div className="d-grid">
              <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  </>
}

export default Pricecard