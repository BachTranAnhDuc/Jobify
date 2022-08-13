import React from "react";
import { Logo } from "../components";
import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby bodega boys stumptown occupy tofu. Gluten-free asymmetrical
            air plant plaid helvetica kale chips. Venmo drinking vinegar
            try-hard put a bird on it vexillologist scenester iPhone XOXO master
            cleanse. Jean shorts poutine blue bottle big mood banh mi ethical
            messenger bag ramps bicycle rights 3 wolf moon heirloom. Lo-fi
            health goth air plant, celiac chambray locavore migas four loko
            pour-over stumptown shaman 3 wolf moon.
          </p>

          <button className="btn btn-hero">Login/Register</button>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
