


import React from 'react';
import { NavLink } from 'react-router-dom';  // Importing NavLink from react-router-dom
import brushing from "../assets/brushing.webp";

const Container = () => {
  return (
    <div className="md:bg-white md:border-2 md:shadow-md md:rounded-lg md:p-4 md:mt-40 md:mx-10 sm:shadow-none sm:p-2 sm:mt-10 sm:border-none">
      <h2 className="md:text-5xl poppins font-bold mb-2 sm:text-3xl">
        7 Steps for the Best Oral Hygiene Routine
      </h2>
      <p className="text-gray-600 text-sm mb-4 sm:text-xs">June 27, 2022</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <img
            src={brushing}
            alt="A dentist working on a patient's teeth"
            className="rounded-lg w-full h-auto object-cover"
          />
          {/* <div className="absolute bottom-0 left-0 p-2 cursor-pointer bg-black bg-opacity-50 text-white">
            Read More
          </div> */}
        </div>
        <div className="poppins flex flex-col justify-between">
          <p className="text-gray-700 poppins text-base leading-relaxed ">
            It’s not hard or impossible to have the best oral hygiene routine for healthier teeth and gums. With great preventative care and these seven steps, you can cut down on your risk of periodontitis, bad breath, tooth decay, and even stains on your teeth. While seven steps to better oral hygiene may sound complicated (or time-consuming,) it’s easier than you might expect.
            <br />
            <br />
            <b>Why Is Oral Hygiene So Important?</b>
            <br />
            Why exactly is good oral hygiene so important? While there are plenty of reasons, such as having fresher breath, there are some pretty big ones you don’t want to overlook. Oral hygiene is paramount to good overall wellness.
            With poor oral hygiene can come poor oral health including high cavity rates and gum disease. Depending on your other health risks, underlying issues can be further aggravated. Poor oral hygiene can lead to an increased risk of cardiovascular disease, diabetes complications, and an increased risk of Alzheimer’s, respiratory infections, and even pregnancy complications (among others.)
          </p>
          {/* Replace the anchor tag with NavLink */}
          <NavLink to="/main" className="mt-4 text-blue-500 hover:underline">
            READ MORE
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Container;
