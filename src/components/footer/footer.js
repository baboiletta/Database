import React from 'react';
import './footer.scss';


class FooterPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <footer color="blue" className="container-fluid font-small pt-4 mt-4">
          <div className="text-center">
            <div className="row">
              <div className="col-sm-6">
                <h5 className="title">Footer Content</h5>
                <p>
                  Here you can use rows and columns here to organize your footer
                  content.
                </p>
              </div>
              <div className="col-sm-6">
                <h5 className="title">Links</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="#!">Link 1</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 2</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 3</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3">
            <div className="container-fluid">
              &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </div>
          </div>
        </footer>
      </React.Fragment>

    )
  }

}


export default FooterPage