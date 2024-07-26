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
                <h1 className="wow fadeInUp">Crispy Chicken Burgers</h1>
                <p className="wow fadeInDown">
                We serve a variety of refreshments, snacks and delicacies to satisfy your taste buds and make sure you get the best experience with us
                </p>
                <div className="hero-button wow fadeInUp">
                  <span>
                    <img src="assets/images/down-arrow.png" alt="" />
                  </span>
                  <Link legacyBehavior href="/menu-seafood">
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
                    <Link legacyBehavior href="/menu-seafood">
                      <a>Burger</a>
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/menu-seafood">
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
                      Bread
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/menu-seafood">
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
                  <Link legacyBehavior href="/menu-seafood">
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
                  <Link legacyBehavior href="/menu-seafood">
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
                  <Link legacyBehavior href="/menu-seafood">
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
                    <Link legacyBehavior href="/menu-seafood">
                      <a>Pizza</a>
                    </Link>
                  </h3>
                  <Link legacyBehavior href="/menu-seafood">
                    <a className="icon-btn">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              {/*=== Quote Box ===*/}
              <div className="quote-box text-center text-white wow fadeInUp">
                <p>
                  Need any Special Food or Any Birthday Cakes?{" "}
                  <Link legacyBehavior href="/menu-fastfood">
                    <a>Order Now</a>
                  </Link>
                </p>
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
                <Link legacyBehavior href="/menu-seafood">
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
                      src="assets/images/about/image-1.jpg"
                      className="mb-40 wow fadeInUp"
                      alt="About Image"
                    />
                  </div>
                  <div className="col-md-6">
                    <img
                      src="assets/images/about/image-2.jpg"
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
      {/*=== Start Menu Section ===*/}
      <section className="menu-section pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Section Title ===*/}
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Best food menu</span>
                <h2>Choose Your Best Menus</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              {/*=== Menu Image Box ===*/}
              <div className="menu-image-box mb-50 pl-lg-30 wow fadeInLeft">
                <img
                  src="assets/images/menu/menu-single-1.jpg"
                  alt="Menu Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Single Content Box ===*/}
              <div className="menu-content-box mb-50">
                {/*=== Single Menu Item ===*/}
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-1.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Burger</a>
                      </Link> 
                      <span className="dot-border" /> 
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                  {/*=== Single Menu Item ===*/}
                  <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-8.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Shawarma</a>
                      </Link>
                      <span className="dot-border" /> 
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*=== Single Menu Item ===*/}
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-2.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Pizza</a>
                      </Link>
                      <span className="dot-border" /> 
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*=== Single Menu Item ===*/}
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-3.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Baked Chicken Wings</a>
                      </Link>
                      <span className="dot-border" /> 
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                    <ul className="ratings">
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <i className="fas fa-star" />
                      </li>
                      <li>
                        <span>
                          
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Menu Section ===*/}
      {/*=== Start Chefs Section ===*/}
      <section className="chefs-bg-section light-red-bg pt-130 pb-100 bg_cover p-r z-1">
        <div
          className="dot-bg bg_cover"
          style={{ backgroundImage: "url(assets/images/bg/dot-bg.png)" }}
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-12">
              {/*=== Chef Content Box ===*/}
              <div className="chef-content-box content-box-gap mb-30 pr-lg-30 wow fadeInLeft">
                <div className="section-title section-title-left mb-30">
                  <span className="sub-title">Best food menu</span>
                  <h2>Meet Our Exclusive &amp; Master Chefs</h2>
                </div>
                <ul className="check-style-one">
                  <li>25 Years of Experience in Restaurant Services</li>
                  <li>
                    Any Kind Of Food Made For Customer and So Much Yamee $ Testy
                  </li>
                </ul>
                <p>
                We serve a variety of refreshments, snacks and delicacies to satisfy your taste buds and make sure you get the best experience with us
                </p>
                <Link legacyBehavior href="/chefs">
                  <a className="main-btn filled-btn">
                    become a chef
                    <i className="far fa-arrow-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xl-8 col-lg-12">
              <div className="row">
                <div className="col-xl-4 col-md-6 col-sm-12">
                  {/*=== Single Team Item ===*/}
                  <div className="single-team-item mb-30 wow fadeInUp">
                    <div className="chef-img">
                      <img
                        src="assets/images/team/chef-1.jpg"
                        alt="Chef Image"
                      />
                      <div className="chef-overlay" />
                      <div className="hover-content">
                        <h3 className="title">Jimmie K. Cryer</h3>
                        <p className="position">Senior Chef</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  {/*=== Single Team Item ===*/}
                  <div className="single-team-item mb-30 wow fadeInUp">
                    <div className="chef-img">
                      <img
                        src="assets/images/team/chef-2.jpg"
                        alt="Chef Image"
                      />
                      <div className="chef-overlay" />
                      <div className="hover-content">
                        <h3 className="title">Jimmie K. Cryer</h3>
                        <p className="position">Senior Chef</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  {/*=== Single Team Item ===*/}
                  <div className="single-team-item mb-30 wow fadeInUp">
                    <div className="chef-img">
                      <img
                        src="assets/images/team/chef-3.jpg"
                        alt="Chef Image"
                      />
                      <div className="chef-overlay" />
                      <div className="hover-content">
                        <h3 className="title">Jimmie K. Cryer</h3>
                        <p className="position">Senior Chef</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  {/*=== Single Team Item ===*/}
                  <div className="single-team-item mb-30 wow fadeInUp">
                    <div className="chef-img">
                      <img
                        src="assets/images/team/chef-4.jpg"
                        alt="Chef Image"
                      />
                      <div className="chef-overlay" />
                      <div className="hover-content">
                        <h3 className="title">Jimmie K. Cryer</h3>
                        <p className="position">Senior Chef</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  {/*=== Single Team Item ===*/}
                  <div className="single-team-item mb-30 wow fadeInUp">
                    <div className="chef-img">
                      <img
                        src="assets/images/team/chef-5.jpg"
                        alt="Chef Image"
                      />
                      <div className="chef-overlay" />
                      <div className="hover-content">
                        <h3 className="title">Jimmie K. Cryer</h3>
                        <p className="position">Senior Chef</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6 col-sm-12">
                  {/*=== Single Team Item ===*/}
                  <div className="single-team-item mb-30 wow fadeInUp">
                    <div className="chef-img">
                      <img
                        src="assets/images/team/chef-6.jpg"
                        alt="Chef Image"
                      />
                      <div className="chef-overlay" />
                      <div className="hover-content">
                        <h3 className="title">Jimmie K. Cryer</h3>
                        <p className="position">Senior Chef</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/*=== End Chefs Section ===*/}
     
      {/*=== Start Testimonial Section ===*/}
      <section className="testimonial-section-one dark-black-bg p-r z-1 pt-120 pb-120">
        <div className="shape line-shape-one">
          <span>
            <img src="assets/images/shape/line-1.png" alt="Shape" />
          </span>
        </div>
        <div className="shape shape-one">
          <span>
            <img src="assets/images/shape/element-1.png" alt="" />
          </span>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              {/*=== Section Title ===*/}
              <div className="section-title text-center text-white mb-50 wow fadeInDown">
                <span className="sub-title">Foods reviews</span>
                <h2>Global Customer Feedback</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                {/*=== Testimonial Image Box ===*/}
                <div className="testimonial-one_image-box p-r wow fadeInLeft">
                  <img
                    src="assets/images/testimonial/thumb-1.jpg"
                    className="testimonial-img-one"
                    alt="Testimonial Image"
                  />
                  <img
                    src="assets/images/testimonial/thumb-2.jpg"
                    className="testimonial-img-two"
                    alt="Testimonial Image"
                  />
                  <img
                    src="assets/images/testimonial/thumb-3.jpg"
                    className="testimonial-img-three"
                    alt="Testimonial Image"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                {/*=== Testimonial Wrapper ===*/}
                <div className="testimonial-wrapper-one wow fadeInRight mr-lg-100">
                  {/*=== Testimonial Slider ===*/}
                  <Slider
                    {...testimonialSliderOne}
                    className="testimonial-slider-one"
                  >
                    {/*=== Single Testimonial ===*/}
                    <div className="single-testimonial-one">
                      <div className="testimonial-inner-content">
                        <p>
                          Sit amet consectetur adipiscing elit A sapien
                          pellentesque nisl dignissim ultrices enim amet
                          elementum. Eu ut velit elit posuere fusce ullamcorper
                          maecenas fermentum nam elit dolor ornare nec sociis
                          aliquet facilisis.
                        </p>
                        <div className="author-quote-box d-flex justify-content-between">
                          <div className="author-title-thumb d-flex">
                            <div className="author-thumb">
                              <img
                                src="assets/images/testimonial/author-thumb-1.jpg"
                                alt="Author Thumb"
                              />
                            </div>
                            <div className="author-title">
                              <h3 className="title">Brian A. Barnes</h3>
                              <p className="position">CEO &amp; Founder</p>
                            </div>
                          </div>
                          <div className="quote">
                            <i className="flaticon-right-quote" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*=== Single Testimonial ===*/}
                    <div className="single-testimonial-one">
                      <div className="testimonial-inner-content">
                        <p>
                          Sit amet consectetur adipiscing elit A sapien
                          pellentesque nisl dignissim ultrices enim amet
                          elementum. Eu ut velit elit posuere fusce ullamcorper
                          maecenas fermentum nam elit dolor ornare nec sociis
                          aliquet facilisis.
                        </p>
                        <div className="author-quote-box d-flex justify-content-between">
                          <div className="author-title-thumb d-flex">
                            <div className="author-thumb">
                              <img
                                src="assets/images/testimonial/author-thumb-1.jpg"
                                alt="Author Thumb"
                              />
                            </div>
                            <div className="author-title">
                              <h3 className="title">Brian A. Barnes</h3>
                              <p className="position">CEO &amp; Founder</p>
                            </div>
                          </div>
                          <div className="quote">
                            <i className="flaticon-right-quote" />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*=== Single Testimonial ===*/}
                    <div className="single-testimonial-one">
                      <div className="testimonial-inner-content">
                        <p>
                          Sit amet consectetur adipiscing elit A sapien
                          pellentesque nisl dignissim ultrices enim amet
                          elementum. Eu ut velit elit posuere fusce ullamcorper
                          maecenas fermentum nam elit dolor ornare nec sociis
                          aliquet facilisis.
                        </p>
                        <div className="author-quote-box d-flex justify-content-between">
                          <div className="author-title-thumb d-flex">
                            <div className="author-thumb">
                              <img
                                src="assets/images/testimonial/author-thumb-1.jpg"
                                alt="Author Thumb"
                              />
                            </div>
                            <div className="author-title">
                              <h3 className="title">Brian A. Barnes</h3>
                              <p className="position">CEO &amp; Founder</p>
                            </div>
                          </div>
                          <div className="quote">
                            <i className="flaticon-right-quote" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Testimonial Section ===*/}
      {/*=== Start Instagram Section ===*/}
      <section className="instagram-gallery pt-130 pb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-1.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-1.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-2.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-2.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-3.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-3.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-4.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-4.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-5.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-5.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-6.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-6.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-7.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-7.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-8.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-8.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-9.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-9.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-10.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-10.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInUp">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-11.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-11.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
              {/*=== Instagram Box ===*/}
              <div className="instagram-box mb-30 wow fadeInDown">
                <div className="instagram-img">
                  <img
                    src="assets/images/instagram/insta-12.jpg"
                    alt="Instagram Image"
                  />
                  <div className="insta-overlay" />
                  <a
                    href="assets/images/instagram/insta-12.jpg"
                    className="img-popup insta-icon"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Instagram Section ===*/}
    </Layout>
  );
};
export default Index;
