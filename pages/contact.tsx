import PageBanner from "../src/components/PageBanner";
import Partners from "../src/components/Partners";
import Layout from "../src/layout/Layout";
const Contact = () => {
  return (
    <Layout>
      <PageBanner pageName={"Contact Us"} title="Contact" />{" "}
      <section className="contact-section pt-130 pb-130">
        <div className="container">
          <div className="contact-info-wrapper pt-70 pb-30 wow fadeInUp">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-10">
                <div className="section-title text-center mb-50">
                  <span className="sub-title">Contact Us</span>
                  <h2>Get In Touch For More Info</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-info-box mb-40">
                  <div className="icon">
                    <img src="assets/images/icon/icon-7.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Location</span>
                    <p>Plot No.49B, Sairaj Towers
Beside Mercedes Benz Showroom
Kavuri Hills, Hyderabad</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-info-box mb-40">
                  <div className="icon">
                    <img src="assets/images/icon/icon-8.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Email Address</span>
                    <p>
                      <a href="mailto:support@gmail.com">info@flamesandflavours.in</a>
                    </p>
                    <p>
                      <a href="mailto:contactfood.net">flamesandflavours.in</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="single-info-box mb-40">
                  <div className="icon">
                    <img src="assets/images/icon/icon-9.png" alt="icon" />
                  </div>
                  <div className="info">
                    <span className="title">Contact Us</span>
                    <p>
                      Phone :<a href="tel:18008892499">18008892499</a>
                    </p><p>
                      Mobile :<a href="tel:+91 90000 68373">+91 90000 68373</a>
                    </p>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-wrapper-one mt-80 pt-70 pb-80 wow fadeInUp">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-12">
                <div className="section-title text-center mb-60">
                  <span className="sub-title">Consultation</span>
                  <h2>Send Us Message</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="contact-form-one"
                >
                  <div className="row justify-content-center">
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Name"
                          name="name" 
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Phone Number"
                          name="phone" 
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email Address"
                          name="email" 
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <input
                          type="url"
                          className="form_control"
                          placeholder="Website"
                          name="website" 
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          placeholder="Write Message"
                          name="message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form_group">
                        <button className="main-btn btn-red">
                          Send us message
                          <i className="far fa-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
      {/*====== Start Contact Map Section ======*/}
      <section className="contact-page-map wow fadeInUp">
        {/*=== Map Box ===*/}
        <div className="map-box">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4362903011815!2d78.39198632401249!3d17.438819949818495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a3778445e7%3A0xd267ce7c464853f5!2sRIYAREDDY%20SOFTSOL%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1679296014694!5m2!1sen!2sin" />
        </div>
      </section>{" "}
      <Partners />
    </Layout>
  );
};
export default Contact;
