import dynamic from "next/dynamic";

const Counter = dynamic(() => import("./Counter"), {
  ssr: false,
});
const QichenCounter = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-counter-item text-white wow fadeInUp mb-40 d-flex justify-content-center">
          <div className="counter-inner-item">
            <div className="icon">
              <i className="flaticon-retention" />
            </div>
            <div className="text">
              <h2 className="number">
                <Counter end={1000} />+
              </h2>
              <p>Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-counter-item text-white wow fadeInUp mb-40 d-flex justify-content-center">
          <div className="counter-inner-item">
            <div className="icon">
              <i className="flaticon-retention" />
            </div>
            <div className="text">
              <h2 className="number">
                <Counter end={10} />+
              </h2>
              <p>Cities</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-counter-item text-white wow fadeInUp mb-40 d-flex justify-content-center">
          <div className="counter-inner-item">
            <div className="icon">
              <i className="flaticon-retention" />
            </div>
            <div className="text">
              <h2 className="number">
                <Counter end={20} />+
              </h2>
              <p>Favorite Dishes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="single-counter-item text-white wow fadeInUp mb-40 d-flex justify-content-center">
          <div className="counter-inner-item">
            <div className="icon">
              <i className="flaticon-retention" />
            </div>
            <div className="text">
              <h2 className="number">
                <Counter end={4} />+
              </h2>
              <p>Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default QichenCounter;
