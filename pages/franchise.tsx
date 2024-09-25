import Link from "next/link";
import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners"; 
import Layout from "../src/layout/Layout";
const Franchise = () => {
  return (
    <Layout>
      <PageBanner pageName={"Fastfood"} title="Franchise" />
      {/*====== End Breadcrumb Section ======*/}
      {/*=== Start Menu Section ===*/}
      <section className="menu-section pt-125 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInUp">
                <span className="sub-title">Get a Franchise</span>
                <h2>Be part of our Family</h2>
              </div>
            </div>
          </div>
         
        </div>
      </section>
      
    </Layout>
  );
};
export default Franchise;
