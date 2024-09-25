import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import QichenCounter from "../src/components/QichenCounter";
import TestimonialSliderThree from "../src/components/slider/TestimonialSliderThree";
import Layout from "../src/layout/Layout";
const About = () => {
  return (
    <Layout header={0} footer={0}>
      <PageBanner pageName={"About Us"} />
      <section className="about-shape-section pt-130 pb-80 p-r z-1">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/about/shape-1.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/about/shape-2.png" alt="shape" />
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-three_image-box text-lg-end mb-20">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <img
                      src="assets/images/about/image-7.jpg"
                      className="about-img-one mb-30 wow fadeInUp"
                      alt="About Image"
                    />
                    <img
                      src="assets/images/about/image-8.jpg"
                      className="about-img-two mb-30 wow fadeInDown"
                      alt="About Image"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/about/image-9.jpg"
                      className="about-img-three mb-30 wow fadeInRight"
                      alt="About Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-three_content-box content-box-gap pl-lg-45 mb-50">
                <div className="section-title section-title-left mb-30 wow fadeInUp">
                  <span className="sub-title">About Flames & Flavours</span>
                  <h2>The Cleanest, Most Delicious Food Ever.</h2>
                </div>
                <p className="wow fadeInDown">
                We serve a variety of refreshments, snacks and delicacies to satisfy your
                taste buds and make sure you get the best experience with us.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="fancy-icon-box mb-50 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-food-serving" />
                      </div>
                      <div className="text">
                        <h5>20+ Popular Testy Foods Menu</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-icon-box mb-50 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-discuss" />
                      </div>
                      <div className="text">
                        <h5>1000+ Satisfied Our Global Customers</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-icon-box mb-50 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-certificate" />
                      </div>
                      <div className="text">
                        <h5>We’ve 25+ Years Of Experience</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-icon-box mb-50 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-smartphone" />
                      </div>
                      <div className="text">
                        <h5>10+ Cities Across India</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-button wow fadeInUp">
                  <Link legacyBehavior href="/about">
                    <a className="main-btn btn-red">
                      Get a Franchise
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <a href="tel:000(123)45689" className="call-button">
                    <div className="icon">
                      <i className="fas fa-headset" />
                    </div>
                    <div className="text">
                      <span>Call </span>
                      <h5>18008892499</h5>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End About Section ===*/}
      {/*=== Start Fact Section ===*/}
      <section className="fact-section dark-red-bg pt-75 pb-35">
        <div className="container">
          <QichenCounter />
        </div>
      </section>
      {/*=== End Fact Section ===*/}
      {/*=== Start Why_choose Section ===*/}
      <section className="why-choose-us pt-130 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-12">
              <div className="choose-content-box content-box-gap mb-30 wow fadeInLeft">
                <div className="section-title section-title-left mb-20">
                  <span className="sub-title">Why Choos us</span>
                  <h2>
                    25+ Years Of Experience In
                    Restaurant Services
                  </h2>
                </div>
                <p>
                We serve a variety of refreshments, snacks and delicacies to satisfy your
                taste buds and make sure you get the best experience with us.
                </p>
                <ul className="check-style-one mb-35">
                  <li>Best Way to Serve Our Foods</li>
                  <li>Low Cost &amp; Best ROI</li>
                </ul>
                <Link legacyBehavior href="/about">
                  <a className="main-btn btn-red">
                    Get a Franchise
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="choose-item-list">
                <div className="row">
                  <div className="col-md-6">
                    <div className="fancy-features-item mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-pizza-slice-1" />
                      </div>
                      <div className="text">
                        <h3 className="title">Fastfoods</h3>
                        <p>Sit amet consecte adisce epsum nisi commos</p>
                        <Link legacyBehavior href="/about">
                          <a className="btn-link">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-features-item mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-chef-1" />
                      </div>
                      <div className="text">
                        <h3 className="title">Experience Chefs</h3>
                        <p>Sit amet consecte adisce epsum nisi commos</p>
                        <Link legacyBehavior href="/about">
                          <a className="btn-link">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-features-item mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-delivery-man" />
                      </div>
                      <div className="text">
                        <h3 className="title">Online Delivery</h3>
                        <p>Sit amet consecte adisce epsum nisi commos</p>
                        <Link legacyBehavior href="/about">
                          <a className="btn-link">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="fancy-features-item mb-30 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-food-serving" />
                      </div>
                      <div className="text">
                        <h3 className="title">Fine Dining</h3>
                        <p>Sit amet consecte adisce epsum nisi commos</p>
                        <Link legacyBehavior href="/about">
                          <a className="btn-link">Read more</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      {/*====== Start History Section ======*/}
      <section className="history-section pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-55 wow fadeInDown">
                <span className="sub-title">Company History</span>
                <h2>Let’s Insight Our History</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="single-history-item wow fadeInLeft mb-100">
                <div className="shape shape-one">
                  <span>
                    <img src="assets/images/shape/line-2.png" alt="shape" />
                  </span>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="history-image-box">
                      <img
                        src="assets/images/gallery/history-2.jpg"
                        alt="History Image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="history-content-box">
                      <span className="duration">In 1995 When We Started</span>
                      <p>
                        Sed ut perspiciatis unde omnis natus sit voluptaten
                        accusantium doloremque laudantium totam aperiam eaque
                        ipsa quae abillo inventore veritatis
                      </p>
                      <div className="author-title-thumb d-flex">
                        <div className="author-thumb">
                          <img
                            src="assets/images/gallery/author-1.jpg"
                            alt="Author Image"
                          />
                        </div>
                        <div className="author-title">
                          <h4>
                            Jimmie K. Cryer <span>/ CEO &amp; Founder</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-history-item wow fadeInRight mb-100">
                <div className="shape shape-one">
                  <span>
                    <img src="assets/images/shape/line-2.png" alt="shape" />
                  </span>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="history-image-box">
                      <img
                        src="assets/images/gallery/history-3.jpg"
                        alt="History Image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="history-content-box">
                      <span className="duration">In 1998 We’ve 5 Member</span>
                      <p>
                        Sorem ipsum dolor sit amet consectetur adipiscing elit.
                        Turpis dignissim elit porta augue. Nibh lectust sed non
                        ultrices sed ornare vulputate
                      </p>
                      <ul className="check-style-one">
                        <li>Best Way to Serve Our Foods</li>
                        <li>Low Cost &amp; Onlie Orders</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-history-item wow fadeInLeft mb-100">
                <div className="shape shape-one">
                  <span>
                    <img src="assets/images/shape/line-2.png" alt="shape" />
                  </span>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="history-image-box">
                      <img
                        src="assets/images/gallery/history-4.jpg"
                        alt="History Image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="history-content-box">
                      <span className="duration">
                        In 1999 Great Achievement
                      </span>
                      <p>
                        On the other hand denounce righteous indignation and
                        dislike men who are so beguiled demoralized by the
                        charms of pleasure of the moment, so blinded by desire,
                        that they cannot foresee the pain and trouble that are
                        bound to ensue and equal blame
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-history-item wow fadeInRight mb-100">
                <div className="shape shape-one">
                  <span>
                    <img src="assets/images/shape/line-2.png" alt="shape" />
                  </span>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="history-image-box">
                      <img
                        src="assets/images/gallery/history-5.jpg"
                        alt="History Image"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="history-content-box">
                      <span className="duration">In 2003 Added New Member</span>
                      <p>
                        Sorem ipsum dolor sit amet consectetur adipiscing elit.
                        Turpis dignissim elit porta augue. Nibh lectust sed non
                        ultrices sed ornare vulputate
                      </p>
                      <ul className="check-style-one">
                        <li>
                          25 Years of Experience in Restaurant Services in India and Dubai
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="history-button text-center wow fadeInUp">
                <Link legacyBehavior href="/history">
                  <a className="main-btn filled-btn">
                    View more history
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>{" "} 
    </Layout>
  );
};
export default About;
