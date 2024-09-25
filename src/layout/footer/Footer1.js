import Link from "next/link";
const Footer1 = () => {
  return (
    <footer className="footer-default light-red-bg p-r z-1 pt-80">
      <div
        className="dot-bg bg_cover"
        style={{ backgroundImage: "url(assets/images/bg/dot-bg.png)" }}
      />
      {/*=== Footer Widget Area ===*/}
      <div className="footer-widget-area pb-10 pb-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget about-company-widget pr-lg-30 mb-40 wow fadeInUp">
                <div className="footer-content">
                  <Link legacyBehavior href="/">
                    <a className="footer-logo mb-30">
                      <img
                        src="assets/images/logo/logo.png"
                        alt="Brand Logo"
                      />
                    </a>
                  </Link>
                  <p>
                   Best Food Franchise in India!
                  </p>
                <p>
                We serve a variety of refreshments, snacks and delicacies to satisfy your taste buds and make sure you get the best experience with us
                </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget footer-nav-widget pl-lg-30 mb-40 wow fadeInDown">
                <h4 className="widget-title">Quick Links</h4>
                <div className="footer-nav-content">
                  <ul className="footer-nav">
                    <li>
                      <a href="/about">About Company</a>
                    </li>
                    
                    <li>
                      <a href="/menu">Our Menu </a>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget footer-nav-widget-two pl-lg-70 mb-40 wow fadeInUp">
                <h4 className="widget-title">Menu Items</h4>
                <div className="footer-nav-content">
                <ul className="footer-nav">
                     
                     <li>
                       <a href="#">Grilled Chicken Burger</a>
                     </li>
                     <li>
                       <a href="#">Shawarma ROll</a>
                     </li>
                     <li>
                       <a href="#">Shawarma Bun</a>
                     </li>
                     <li>
                       <a href="#">Sandwich</a>
                     </li>
                     <li>
                       <a href="#">French Fries</a>
                     </li>
                   </ul>
                   <ul className="footer-nav">
                   <li>
                       <a href="#">Thick Shakes</a>
                     </li>
                     <li>
                       <a href="#">Fresh Juices</a>
                     </li>
                     <li>
                       <a href="#">Lassi</a>
                     </li>
                     <li>
                       <a href="#">Icecreams</a>
                     </li>
                   </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              {/*=== Footer Widget ===*/}
              <div className="footer-widget contact-info-widget pl-lg-70 mb-40 wow fadeInDown">
                <div className="contact-info-box mb-20">
                  <span className="title">Call for order:</span>
                  <h3>
                    <a href="tel:+125865892">18008892499</a>
                  </h3>
                  <p>
                    <a href="mailto:hello@example.com">info@flamesandflavours.in</a>
                  </p>
                </div>
                <div className="contact-info-box mb-20">
                  <span className="title">Location :</span>
                  <p>Plot No.49B, Sairaj Towers
Beside Mercedes Benz Showroom
Kavuri Hills, Hyderabad-500081</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*=== Copyright Area ===*/}
      <div className="copyright-area border-top-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/*=== Copyright Text ===*/}
              <div className="copyright-text">
                <p>© 2024 Flames & Flavours, All Rights Reserved</p>
              </div>
            </div>
            <div className="col-lg-6">
              {/*=== Copyright Nav ===*/}
              <div className="copyright-nav float-lg-end">
                <ul>
                  <li>
                    <a href="/privacy">Privacy</a>
                  </li>
                  <li>
                    <a href="/faqs">Faqs</a>
                  </li>
                  <li>
                    <a href="/menu">Food Menu</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="https://api.whatsapp.com/send?phone=+919000068373&text=Hi I would like to know more about the franchise." target="_blank"

className="btn-whatsapp-pulse btn-whatsapp-pulse-border">
<i className="fab fa-whatsapp"></i>
</a>
    </footer>
  );
};
export default Footer1;
