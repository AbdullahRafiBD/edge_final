const Home = () => {
  return <div>
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div style={{height: "500px"}} className="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2016/12/09/11/33/smartphone-1894723_1280.jpg"  className="d-block w-100" alt="..."/>
    </div>
    <div style={{height: "500px"}} className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div style={{height: "500px"}} className="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_1280.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  </div>;
};

export default Home;
