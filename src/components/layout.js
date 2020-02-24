import React from "react"
import { Link } from "gatsby"


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    return (
      <div>




        <header>
          <nav className="navbar navbar-expand-md navbar-light bg-white absolute-top">
            <div className="container">

              <button className="navbar-toggler order-2 order-md-1" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-left navbar-right" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse order-3 order-md-2" id="navbar-left">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item dropdown active">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown01">
                      <a className="dropdown-item" href="home-onecolumn.html">One column</a>
                      <a className="dropdown-item" href="home-twocolumn.html">Two column</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Components</a>
                    <div className="dropdown-menu" aria-labelledby="dropdown03">
                      <a className="dropdown-item" href="doc-alerts.html">Alerts</a>
                      <a className="dropdown-item" href="doc-buttons.html">Buttons</a>
                      <a className="dropdown-item" href="doc-cards.html">Cards</a>
                    </div>
                  </li>
                </ul>
              </div>

              <a className="navbar-brand mx-auto order-1 order-md-3" href="/">{title}</a>

              <div className="collapse navbar-collapse order-4 order-md-4" id="navbar-right">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="page-contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main className="main pt-4">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                {children}
              </div>
              <div className="col-md-3 ml-auto">
                <aside className="sidebar">
                  <div className="card mb-4">
                    <div className="card-body">
                      <h4 className="card-title">About</h4>
                      <p className="card-text">Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam <a href="#">semper libero</a>, sit amet adipiscing sem neque sed ipsum. </p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="container">
          <div className="col-md-12">
            © {new Date().getFullYear()}, Built with
          {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>          
          </div>
          </div>
          </footer>
      </div>
    )
  }
}

export default Layout
