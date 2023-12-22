const Logo = () => {
  return (
    <>
      <div className="flex items-center gap-5">
        <div>
          <img src="/tasklogger-logo.png" alt="Logo" className="max-w-24" />
        </div>
        <h1 className="-ml-5 md:-ml-7 mt-2 font-heading text-base md:text-2xl font-bold">
          TaskLogger
        </h1>
      </div>
    </>
  );
};

export default Logo;
