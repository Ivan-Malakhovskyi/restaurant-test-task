import React from "react";
// import heroImg from "../../../public/images/hero_img.png";

const Hero = () => {
  return (
    <section className="relative pt-[152px] pb-[352px] bg-[url('/images/hero_img.png')]  bg-cover bg-center">
      <div className="absolute inset-0 bg-bgHeroColor opacity-50"></div>
      <div className="relative text-center h-full mx-auto  max-w-[480px] max-h-[553px]">
        <h1 className="text-white text-4xl font-Italianno mb-[13px] font-normal text-[39px]">
          You can feel happy with us
        </h1>
        <p className="text-white font-normal text-sm">
          Feel in Italy with our restaurant
        </p>
      </div>
    </section>
  );
};

export default Hero;
