import React from "react";
import ApanaTime from "../assets/portfolio/ApanaTime.jpg";
 
// Add the correct path to the api image
// import webpostman from "../assets/portfolio/webpostman.jpg";
// import apod from "../assets/portfolio/apod.jpg";
// import waveportal from "../assets/portfolio/waveportal.jpg";
// import nftportal from "../assets/portfolio/nftportal.jpg";
// import iptracker from "../assets/portfolio/iptracker.jpg";

const Project = () => {
  const proj = [
    {
      id: 1,
      src: ApanaTime,
      link: 'https://www.apanatime.in/',
      // repo: 'https://github.com/rahulkarda/crypto-info-api'
    },
  //   {
  //     id: 2,
  //     src: webpostman,
  //     link: 'https://webpostman.netlify.app/',
  //     // repo: 'https://github.com/rahulkarda/Web-Postman'
  //   },
  //   {
  //     id: 3,
  //     src: apod,
  //     link: 'https://apodbyrahul.netlify.app/',
  //     // repo: 'https://github.com/rahulkarda/NASA-APOD'
  //   },
  // {
  //   id: 4,
  //   src: waveportal,
  //   link: 'https://waveatrahul.netlify.app/',
  //   // repo: 'https://github.com/rahulkarda/Wave-Portal'
  // },
  //   {
  //     id: 5,
  //     src: nftportal,
  //     link: 'https://nftportalbyrahul.netlify.app/',
  //     // repo: 'https://github.com/rahulkarda/NFT-Portal'
  //   },
  //   {
  //     id: 6,
  //     src: iptracker,
  //     link: 'https://trackmyip.netlify.app/',
  //     // repo: 'https://github.com/rahulkarda/IP-Address-Tracker'
  //   },
  ];

  return (
    <div
      name="Project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out some of my Project right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {proj.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  View Project
                </button>
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
