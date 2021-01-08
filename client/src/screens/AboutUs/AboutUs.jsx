import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import Footer from "../../components/shared/Footer/Footer";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './AboutUs.css';

export default function AboutUs(props) {
  return (
    <Layout username={props.user}>
        <div className="goombasquad">
        {/* <img
          className="goomba"
          src="https://toppng.com/uploads/preview/oomba-transparent-stacked-super-mario-goomba-tower-11563482761cbbpeh5t4c.png"
        /> */}
      <div className="owner">
          <h4 className='aboutheader'>Zac</h4>
      </div>
        <div className="Jeri">
          <h4 className='aboutheader'>Jeri</h4>
          <img src='https://ca.slack-edge.com/T0351JZQ0-U01BQ9V2NJW-19f3da946c8c-512' />
          <div className='icons'>
          <GithubIcon />
          <LinkedInIcon />
          </div>
        </div>
        <div className="Hunter">
        <h4 className='aboutheader'>Hunter</h4>
        <img src='https://ca.slack-edge.com/T0351JZQ0-U01CBUCHVUH-3e3a60ddc043-512' />
        <div className='icons'>
          <GithubIcon />
          <LinkedInIcon />
          </div>
        </div>
        <div className="Pak">
        <h4 className='aboutheader'>Pak</h4>
        <img src='https://ca.slack-edge.com/T0351JZQ0-U01CNSHM6HL-3e9678e4c5ed-512' />
        <div className='icons'>
          <GithubIcon />
          <LinkedInIcon />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
