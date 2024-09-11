import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners"; 
import Layout from "../src/layout/Layout";
const MenuFastFood = () => {
  return (
    <Layout>
      <PageBanner pageName={"Menu"} title="Our Flavours" />
      {/*====== End Breadcrumb Section ======*/}
      {/*=== Start Menu Section ===*/}
      <section className="menu-section pt-125 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title">Best food menu</span>
                <h2>Choose Your Best Menus</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="menu-img-box mb-50 pl-lg-30 wow fadeInLeft">
                <img
                  src="assets/images/menu/menu-single-2.jpg"
                  alt="Menu Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="menu-content-box mb-50 wow fadeInUp">
                <div className="single-menu-item mb-30">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-1.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Grilled Burger</a>
                      </Link> 
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
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-8.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Shawarma-roll</a>
                      </Link> 
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
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/gallery-4.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Sandwich</a>
                      </Link> 
                      
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
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-3.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Baked Chicken Wings</a>
                      </Link> 
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
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center pt-80">
            <div className="col-lg-6">
              <div className="menu-content-box pl-lg-30 mb-50 wow fadeInUp">
                <div className="single-menu-item mb-30">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-5.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Pasta Fettuccine</a>
                      </Link> 
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
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-4.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Seafood Pizza</a>
                      </Link> 
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
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-6.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Submarine Sandwich</a>
                      </Link> 
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
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/thumb-7.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Chicken Biryani</a>
                      </Link> 
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
                          <a href="#">(5k Reviews)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
             
              </div>
            </div>
            <div className="col-lg-6">
              <div className="menu-img-box mb-50 pl-lg-40 wow fadeInRight">
                <img
                  src="assets/images/menu/menu-single-1.jpg"
                  alt="Menu Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Menu Section ===*/}
      
      {/*=== Start Instagram Section ===*/}
      <section className="instagram-gallery pt-130 pb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
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
    </Layout>
  );
};
export default MenuFastFood;
