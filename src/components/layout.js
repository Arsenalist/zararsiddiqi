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

              <a className="navbar-brand mx-auto order-1 order-md-3" href="/">{title}</a>

              <div className="collapse navbar-collapse order-4 order-md-4" id="navbar-right">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/about">About</a>
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
