import React from "react";
import Header from "../Compunents/Header";
import GooglePlay from "../Icons/googlePlay.png";
import AppleStore from "../Icons/Apple.png";
import Mobile from "../Images/mob.webp";
const HeroSection = () => {
  return (
    <section
      id="home"
      className="hero h-[140vh] bg-no-repeat bg-cover bg-center"
    >
      <Header />
      {/* above header ?/ */}
      <div className="text-white flex flex-col items-center mt-12">
        {/* hero setion content ? */}
        <div className="text-5xl text-center">
          <h1>Sometimes</h1>
          <h1>Money Can</h1>
          <h1>Be Confusing.</h1>
          <p className="text-xl tracking-wider pt-4">
            Let Time vault Make It Simple
          </p>
        </div>
        {/* apple store and androiod   */}
        <div className="flex items-center pt-12">
        <a href="https://play.google.com/store/apps/details?id=com.junaidanwar.allKata&pcampaignid=web_share">
        <img src={GooglePlay} alt="" />
          
        </a>
        <a href="https://apps.apple.com/gb/app/time-vault-vegas-calculator/id6475633219">
        <img src={AppleStore} alt="" />
        </a>
        
        </div>

        {/* mob image */}
        <div>
          <img src={Mobile} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
