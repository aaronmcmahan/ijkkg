import * as React from 'react'
import { Link } from 'gatsby'

import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <section className="hero">
      <div className="py-5 text-center container">

        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto text-white">
            <h1 className="">Japan Karate Kendokai</h1>
            <p className="lead">Traditional Japanese Karate-do</p>
          </div>
        </div>
      </div>
    </section>

    <section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <i className="icon-screen-desktop m-auto text-primary"></i>
              </div>
              <h3>Black belt testing</h3>
              <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <i className="icon-layers m-auto text-primary"></i>
              </div>
              <h3>Bootstrap 4 Ready</h3>
              <p className="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-0 mb-lg-3">
              <div className="features-icons-icon d-flex">
                <i className="icon-check m-auto text-primary"></i>
              </div>
              <h3>Easy to Use</h3>
              <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Image Showcases --> */}
    <section className="showcase">
      <div className="container-fluid p-0">
        <div className="row no-gutters">

          <div className="col-lg-6 order-lg-2 text-white showcase-img"></div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Fully Responsive Design</h2>
            <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6 text-white showcase-img"></div>
          <div className="col-lg-6 my-auto showcase-text">
            <h2>Updated For Bootstrap 4</h2>
            <p className="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6 order-lg-2 text-white showcase-img" ></div>
          <div className="col-lg-6 order-lg-1 my-auto showcase-text">
            <h2>Easy to Use &amp; Customize</h2>
            <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-light">

      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>

  </IndexLayout>
)

export default IndexPage
