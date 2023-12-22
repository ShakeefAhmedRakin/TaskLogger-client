import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="space-y-4 py-0 md:py-16">
        <div className="space-y-4" data-aos="fade-up" data-aos-duration="2000">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mx-auto text-center max-w-lg">
            Organize your<br></br>student life
          </h1>
          <p className="font-text text-center max-w-lg mx-auto font-semibold text-xs md:text-base">
            Attain focus, organization, and peace of mind with TaskLogger
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/register")}
              className="btn border-none hover:shadow-xl bg-accent font-heading text-white hover:bg-accent"
            >
              Let’s Explore
            </button>
          </div>
        </div>

        <div
          className="max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img src="/banner.png" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Banner;
