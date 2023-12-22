const About = () => {
  return (
    <>
      <div className="custom-min-height flex flex-col-reverse md:flex-row gap-5 mb-10 font-heading justify-center items-center">
        <div className="flex-1" data-aos="fade-up" data-aos-duration="2000">
          <h1 className="font-bold text-primary text-4xl mb-4">Our Mission</h1>
          <p className="text-xs md:text-base mb-8">
            {
              "At TaskLogger, our mission is to revolutionize the way students manage their tasks, enabling them to achieve their academic goals with ease. We strive to provide a user-centric platform that simplifies task organization and fosters productivity in the student community."
            }
          </p>
          <h1 className="font-bold text-primary text-3xl mb-4">Who We Are</h1>
          <p className="text-xs md:text-base">
            {
              "TaskLogger is a dedicated team passionate about empowering students through efficient task management. Comprising educators, developers, and designers, we understand the challenges students face in balancing academics, personal life, and extracurricular commitments.."
            }
          </p>
        </div>

        <div className="flex-1" data-aos="fade-up" data-aos-duration="2000">
          <img src="/mission.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
