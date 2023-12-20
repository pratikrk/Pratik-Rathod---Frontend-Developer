import Navbar from "../Navbar/Navbar";
import "./Banner.css";
// import { MDBBtn, MDBContainer } from 'mdb-react-ui-kit';

function Banner() {
  return (
    <div className="banner-container">
      {/* Navbar */}
      <Navbar />

      {/* Video background */}
      <video
        className="bg-video"
        aria-hidden="true"
        data-content-video="true"
        poster="https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_2_Web_Crop_fbebdf1cd4.jpg"
        muted
        playsInline
        loop
        autoPlay
      >
        <source
          type="video/mp4"
          src="https://sxcontent9668.azureedge.us/cms-assets/assets/OTF_2_Launch_Checkpoint_Slo_Mo_1920_1080_4ef903451e.mp4"
        />
      </video>

      {/* Tagline */}

      <div className="headline">
        <p className="head">Explore Beyond Earth with SpaceX</p>
        {/* <p className="subhead">
          Revolutionizing space exploration,
          <br /> SpaceX is committed to pushing the boundaries of human
          spaceflight and making life multiplanetary.
          <br /> Join us on a journey to the stars.
        </p> */}
      </div>
    </div>
  );
}

export default Banner;
