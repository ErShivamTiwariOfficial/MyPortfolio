import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          Hello, I am Shivam Tiwari, a Frontend Developer with a passion for designing visually pleasing, user-friendly, and performance-driven web experiences. I code from scratch to create something unique and make ideas come to life for every project.
          Focused on:
          <br/>
          <br />
          <b><u>Minimalistic Design:</u></b> Clean and modern interfaces that capture and engage.
          <br />
          <b><u>Thoughtful Branding:</u></b>  Visuals aligned with your identity and values.
          <br />
          <b><u> Customer-Centric Experiences:</u></b>  Prioritizing usability and seamless interactions.
          <br />
          <br />
          I love turning concepts into reality, enhancing project conversions, and driving traffic through optimized designs for search engines and social platforms. Whether it’s developing a fresh identity or breathing new life into an existing one, I’m here to make your vision a reality.
          Let’s build something amazing together!
        </p>
{/* 
        <br />

        <p className="text-xl">
        I like to code matters from scratch and love the idea of bringing thoughts to life. Connect with me to get your project done. <br /> <br />
        I value minimalistic designs, thoughtful branding of the content, and customer relatable experience. Let’s discover together how we can make your project convert better!<br /> <br />
        I enjoy creating or redesigning a distinct identity for a product or service, get more traffic from search engine and social platforms.
        </p> */}
      </div>
    </div>
  );
};

export default About;
