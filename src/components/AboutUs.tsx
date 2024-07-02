import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import chief from "/public/images/chief.jpeg";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <section className="py-[50px]">
      <MaxWidthWrapper>
        <ul className="md:flex gap-5 justify-center items-center ">
          <li>
            <div className="flex mb-[20px] md:mb-5">
              <h3 className="relative mx-auto md:mx-0 text-center md:mr-auto font-Italianno text-[27px] font-normal">
                About Us
                <span className="absolute left-0 bottom-0 w-full h-[1px] border-[1px] transition bg-transparent ease-out duration-700 border-mainYellow"></span>
              </h3>
            </div>{" "}
            <p className="text-[11px] font-normal text-center md:text-start md:text mb-[21px] md:max-w-[540px]">
              I`m a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you. This
              is a great space to write long text about your company and your
              services.
            </p>
            <p className="text-[11px] font-normal text-center md:text-start mb-[21px] md:max-w-[540px]">
              I`m a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. Feel free to drag and drop
              me anywhere you like on your page. I’m a great place for you to
              tell a story and let your users know a little more about you. This
              is a great space to write long text about your company and your
              services.
            </p>
          </li>
          <li>
            {" "}
            <Image
              src={chief}
              width={380}
              height={254}
              className="md:w-[540px] md:h-[301px]"
              alt="chief"
            />
          </li>
        </ul>
      </MaxWidthWrapper>
    </section>
  );
};

export default AboutUs;
