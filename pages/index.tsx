import Link from "next/link";
import Slider from "react-slick"; 
import Layout from "../src/layout/Layout";
import { testimonialSliderOne } from "../src/sliderProps";
const Index = () => {
  return (
    <Layout header={1} footer={1}>
      {/*=== Start Banner Section ===*/}
      <section className="banner-one p-r z-1">
        <div className="shape shape-one">
          <span>
            <img src="assets/images/hero/hero-shape-1.png" alt="shape" />
          </span>
        </div>
        <div className="shape shape-two">
          <span>
            <img src="assets/images/hero/hero-shape-2.png" alt="shape" />
          </span>
        </div>
        <div className="shape line-shape-one">
          <span>
            <img src="assets/images/shape/line-1.png" alt="shape" />
          </span>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              {/*=== Hero Content ===*/}
              <div className="hero-content mb-40 pr-lg-40">
                <h1 className="wow fadeInUp">The Real Indian Flavours</h1>
                <p className="wow fadeInDown">
                We serve a variety of refreshments, snacks and delicacies to satisfy your taste buds and make sure you get the best experience with us
                </p>
                <div className="hero-button wow fadeInUp">
                  <span>
                    <img src="assets/images/down-arrow.png" alt="" />
                  </span>
                  <Link legacyBehavior href="/contact">
                    <a className="main-btn btn-red">
                     Contact
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              {/*=== Hero Image ===*/}
              <div className="hero-image-box mb-40 wow fadeInRight">
                <img src="assets/images/hero/hero-1.jpg" alt="Hero Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Banner Section ===*/}
      {/*=== Start Category Section ===*/}
      <section
        className="category-bg-section pt-70 pb-80 p-r z-1"
        style={{ backgroundImage: "url(assets/images/bg/category-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Section Title ===*/}
              <div className="section-title text-center text-white mb-50 wow fadeInDown">
                <span className="sub-title">Our Popular Food</span>
                <h2>Best Category Foods Menu</h2>
              </div>
            </div>
          </div>
          <div className="row">
           
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Category Item ===*/}
              <div className="single-category-item mb-30 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-2.png" alt="thumb icon" />
                </div>
                <div className="content d-flex">
                  <h3 className="title">
                    <Link legacyBehavior href="/menu">
                      <a>Burger</a>
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/menu">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
           
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Category Item ===*/}
              <div className="single-category-item mb-30 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/shawarma.png" alt="thumb icon" />
                </div>
                <div className="content d-flex">
                  <h3 className="title">
                    <Link legacyBehavior href="menu-seafood">
                      Shawarma
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/menu">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Category Item ===*/}
              <div className="single-category-item mb-30 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-3.png" alt="thumb icon" />
                </div>
                <div className="content d-flex">
                  <h3 className="title">
                    <Link legacyBehavior href="menu-seafood">
                      Sandwich
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/menu">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Category Item ===*/}
              <div className="single-category-item mb-30 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/lassi.png" alt="thumb icon" />
                </div>
                <div className="content d-flex">
                  <h3 className="title">
                    <Link legacyBehavior href="menu-seafood">
                      Lassi
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/menu">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Category Item ===*/}
              <div className="single-category-item mb-30 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-6.png" alt="thumb icon" />
                </div>
                <div className="content d-flex">
                  <h3 className="title">
                    <Link legacyBehavior href="menu-seafood">
                      Chicken
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/menu">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              {/*=== Single Category Item ===*/}
              <div className="single-category-item mb-30 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-1.png" alt="thumb icon" />
                </div>
                <div className="content d-flex">
                  <h3 className="title">
                    <Link legacyBehavior href="/menu">
                      <a>Pizza</a>
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/menu">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      {/*=== End Category Section ===*/}
      {/*=== Start About Section ===*/}
      <section className="about-section pt-130 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              {/*=== About Content Box ===*/}
              <div className="about-content-box content-box-gap mb-40 wow fadeInLeft">
                <div className="section-title section-title-left mb-30">
                  <span className="sub-title">About Flames & Flavours</span>
                  <h2>
                    The Best Tasty &amp; Yamee Food and Chief Based on India
                  </h2>
                </div>
                <p>
                We serve a variety of refreshments, snacks and delicacies to satisfy your taste buds and make sure you get the best experience with us
                </p>
                <Link legacyBehavior href="/menu">
                  <a className="main-btn btn-red">
                    learn more
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              {/*=== About Content Box ===*/}
              <div className="about-image-gallery ml-lg-40">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src="assets/images/gallery/gallery-4.jpg"
                      className="mb-40 wow fadeInUp"
                      alt="About Image"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/gallery/gallery-5.jpg"
                      className="mb-40 wow fadeInDown"
                      alt="About Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End About Section ===*/}
        
    </Layout>
  );
};
export default Index;
