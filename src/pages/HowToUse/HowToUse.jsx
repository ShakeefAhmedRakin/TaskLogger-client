const HowToUse = () => {
  return (
    <div className="custom-min-height space-y-10 mb-32 font-heading justify-center items-center">
      <div className="flex-1" data-aos="fade-up" data-aos-duration="2000">
        <h1 className="font-bold text-primary text-4xl mb-4">How To Use</h1>
        <p className="text-xs md:text-base mb-8">
          {
            "TaskLogger simplifies task management for students in a few easy steps. Start by signing up or logging in to access your personalized dashboard. Create tasks with titles, descriptions, deadlines, and priorities, then seamlessly manage them across 'To-Do,' 'Ongoing,' and 'Completed' lists using drag-and-drop functionality. Personalize your profile, stay updated with notifications, collaborate with peers, and explore additional features for enhanced productivity. Need help? Our support team is here for you. Get organized, stay focused, and achieve your academic goals effortlessly with TaskLogger."
          }
        </p>
      </div>
      <div className="flex-1" data-aos="fade-up" data-aos-duration="3000">
        <img src="/howtouse.PNG" alt="" />
      </div>
    </div>
  );
};

export default HowToUse;
