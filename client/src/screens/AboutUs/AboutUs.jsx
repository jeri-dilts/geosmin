import React from "react";
import Layout from "../../components/shared/Layout/Layout";
// import Footer from "../../components/shared/Footer/Footer";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./AboutUs.css";
import Logo from "../../components/shared/Logo/Logo";
// import Geosmin1 from "../../components/shared/Logo/Images/Geosmin1.png";

export default function AboutUs(props) {
  return (
    <Layout username={props.user}>
      <Logo />
      <div className="about-us-div">
        <div className="chestnut">
          <img
            src="https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/zack-chestnut-a2f39ea7"
            alt=""
            className="zac"
          />
          <div className="title-icons">
          <h3 className="title">Zac</h3>
          </div>
          <div className="about">
            When an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </div>
        </div>
        <div className="jeri">
          <div className="about">
            Hello! In my previous life I was a scientist, but now I'm a software
            engineer! Check out my GitHub as I build apps using ReactJS. I try
            to make my work fun and innovative as also is my approach on life. I
            thrive in challenging environments and am looking for a company just
            as ambitious as myself.{" "}
          </div>
          <div className="title-icons">
          <h3 className="title">Jeri</h3>
          <div className="icons">
          <GithubIcon />
          <LinkedInIcon />
          </div>
          </div>
          <img
            src="https://ca.slack-edge.com/T0351JZQ0-U01BQ9V2NJW-19f3da946c8c-512"
            alt=""
            className="dilts"
          />
        </div>
        <div className="hunter">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQH6lrB2UKNd1g/profile-displayphoto-shrink_800_800/0/1603004778815?e=1616025600&v=beta&t=ucThh8mFLGc9lMSpYi4Ry7O65zdirxeqeMPT0GPqI98"
            alt=""
            className="mott"
          />
          <div className="title-icons">
          <h3 className="title">Hunter</h3>
          <div className="icons">
          <GithubIcon />
          <LinkedInIcon />
          </div>
          </div>
          <div className="about">
            Ever since I can remember I loved to learn. I was thrilled to learn
            absolutely anything, I just wanted to know how things worked and how
            they were built. When I was promoted to production manager it felt
            as if I unlocked a whole new level of things to learn. It was so
            satisfying to gain knowledge and understanding of something I
            thought i never would. Thats why I have decided to be a software
            engineer! I have learned the fundamentals and I know I have only
            scratched the surface.
          </div>
        </div>
        <div className="pak">
          <div className="about">
            I am a Mechanical Engineer turned Software Developer. I have a
            passion for problem solving and design. I welcome new challenges and
            strive for innovation, excellence, and continuous growth. With more
            than 12 years of engineering experience working on products like the
            Jeep Grand Cherokee SRT / Trackhawk, the Dodge RAM TRX at FCA, and
            designing and developing exterior accessories for numerous vehicles
            at General Motors, I have ample experience in the product
            development lifecycle and working with multi-disciplinary teams to
            create amazing products. My personal hobbies include hosting and
            maintaining a Plex media server, designing and 3D printing parts and
            gadgets, interior & exterior design, and building computers/gaming.
            I’m a jack of all trades with a thirst for learning new skill-sets.
          </div>
          <div className="title-icons">
          <h3 className="title">Pak</h3>
          <div className="icons">
          <GithubIcon />
          <LinkedInIcon />
          </div>
          </div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C5103AQHKkjUUYHuR4g/profile-displayphoto-shrink_200_200/0/1517368047910?e=1616025600&v=beta&t=7tgMWuGKNza10eADNhal-oXseF80ZGgfBt1FqXbDLZo"
            alt=""
            className="mike"
          />
        </div>
      </div>
    </Layout>
  );
}
