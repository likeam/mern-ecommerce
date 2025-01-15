import React, { useEffect, useState } from "react";

const About = () => {
  return (
    <div>
      <h1 className="overflow-x-hidden text-[2rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] mb-4 font-extrabold">
        About Me
      </h1>
      <ol className="relative border-s border-gray-200 dark:border-gray-700"></ol>

      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src="../../ar.jpg"
              alt="avatar"
              className="bg-white p-2 sm:p-4  h-[240px] w-[240px] sm:h-[340px] sm:w-[340px] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              My name is Abdul Rehman. I will graduate in Computer Engineering
              from COMSATS Lahore . I work as a web developer and freelancer. My
              hobbies include watching movies, series, playing video games, and
              occasionally cooking.
            </p>
            <p>
              I have interests not only in technology but also in movies,
              series, video games, and cooking. I excel in meeting deadlines for
              my work.
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
          My dedication and perseverance in timely delivery of work are integral
          to me. I maintain the courage to face any challenges for extended
          periods.
        </p>
      </div>
      <hr className="my-8 md::my-10 " />
    </div>
  );
};

export default About;
