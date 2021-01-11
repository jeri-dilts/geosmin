import React from "react";
import Layout from "../../components/shared/Layout/Layout";
// import Footer from "../../components/shared/Footer/Footer";
// import GithubIcon from "@material-ui/icons/GitHub";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./AboutUs.css";
// import Logo from "../../components/shared/Logo/Logo";
// import Geosmin1 from "../../components/shared/Logo/Images/Geosmin1.png";

export default function AboutUs(props) {
  return (
    <Layout username={props.user}>
      <div className="pagecontainer">
        <div className="maincontent">Here's some page content.
        <img src='https://cdn.vox-cdn.com/thumbor/2dAGG4mtxtXA7zmagQwrgB_wG18=/0x0:600x600/1200x0/filters:focal(0x0:600x600):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19922764/EWWQ4muUEAIhgN8.jpeg' />
        <h2>Testing Header Inside Main Content</h2>
        </div>
        
        <div className="testfooter">
          <div className="footercontactarea">
            <div>About Us</div>
            <div>Contact Us</div>
          </div>
          <div className="footericonarea">
            <div className='insta'>Instagram Icon</div>
            <div className='fb'>Facebook Icon</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
