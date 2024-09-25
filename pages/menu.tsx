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
                    
                  </div>
                </div>
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/menu/menu-7.png" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Shawarma-bun</a>
                      </Link> 
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                    
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
                    <img src="assets/images/gallery/gallery-8.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Thick Shakes</a>
                      </Link> 
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                  
                  </div>
                </div>
                
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/gallery/gallery-8.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Fresh Juices</a>
                      </Link> 
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                   
                  </div>
                </div>
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/gallery/gallery-8.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Lassi</a>
                      </Link> 
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                   
                  </div>
                </div>
                <div className="single-menu-item mb-30 wow fadeInUp">
                  <div className="thumb">
                    <img src="assets/images/gallery/gallery-8.jpg" alt="" />
                  </div>
                  <div className="text">
                    <h3 className="item-title-price">
                      <Link legacyBehavior href="/menu-fastfood">
                        <a className="item-title">Ice Creames</a>
                      </Link> 
                    </h3>
                    <p>Roasted langoustine, consommé</p>
                   
                  </div>
                </div>
             
              </div>
            </div>
            <div className="col-lg-6">
              <div className="menu-img-box mb-50 pl-lg-40 wow fadeInRight">
                <img
                  src="assets/images/gallery/gallery-8.jpg"
                  alt="Menu Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=== End Menu Section ===*/}
       
    </Layout>
  );
};
export default MenuFastFood;
