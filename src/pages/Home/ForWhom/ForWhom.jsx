const ForWhom = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 mb-32  font-heading justify-center items-center">
      <div className="flex-1" data-aos="fade-up" data-aos-duration="2000">
        <h1 className="font-bold text-gray-400">For Whom</h1>
        <h1 className="font-bold text-primary text-4xl mb-4">
          Empowering Student Success
        </h1>
        <p className="text-xs md:text-base ">
          {
            "TaskLogger is tailored for students seeking enhanced productivity and seamless task management. Whether you're juggling coursework, extracurricular activities, or personal projects, TaskLogger offers a user-friendly platform to streamline your academic journey. Designed with students in mind, this intuitive task management solution helps you prioritize assignments, deadlines, and goals, empowering you to achieve academic excellence while maintaining a balanced student life."
          }
        </p>
      </div>

      <div className="flex-1" data-aos="fade-up" data-aos-duration="2000">
        <img src="/forwhom.png" alt="" />
      </div>
    </div>
  );
};

export default ForWhom;
