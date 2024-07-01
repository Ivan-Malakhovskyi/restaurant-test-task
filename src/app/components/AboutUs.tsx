import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import chief from "/public/images/chief.jpeg";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <section className="py-[50px]">
      <div className="flex mb-[20px]">
        <h3 className="relative mx-auto font-Italianno text-[27px] font-normal">
          About Us
          <span className="absolute left-0 bottom-0 w-full h-[1px] border-[1px] transition bg-transparent ease-out duration-700 border-mainYellow"></span>
        </h3>
      </div>
      <MaxWidthWrapper>
        <p className="text-[11px] font-normal text-center mb-[21px]">
          I`m a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you. This is a great
          space to write long text about your company and your services.
        </p>
        <p className="text-[11px] font-normal text-center mb-[21px]">
          I`m a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you. This is a great
          space to write long text about your company and your services.
        </p>
      </MaxWidthWrapper>
      <Image src={chief} width={380} height={254} alt="chief" />
    </section>
  );
};

export default AboutUs;
