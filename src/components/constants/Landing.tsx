const Landing = () => {
  return (
    <>
      <div className="w-full font-[poppins]  flex flex-col items-center">
        <div className="w-[95%] min-h-[calc(100vh-70px)] flex max-md:flex-col ">
          <div className="w-[50%] flex flex-col justify-center max-md:w-full">
            <div className="text-[80px] tracking-wide max-md:text-center max-md:text-[40px] max-md:leading-0 leading-[90px] font-[extra]">
              Learn without limits
            </div>
            <div className="text-[17px] max-md:text-[16px]">
              Start, switch, or advance your career with more than 7,000
              courses, Professional Certificates, degrees from world-class
              universities and companies.
            </div>
            <div className="flex items-center mt-6 max-md:flex-col ">
              <button className="px-10 mr-3 h-[70px] max-md:h-[50px] max-md:mb-3 max-md:w-[80%] rounded-md bg-[blue] text-white">
                Join for Free
              </button>
              <button className="h-[70px] max-md:h-[50px] border-2 max-md:w-[80%] border-[blue] px-14 rounded-md text-[blue]">Try Coursera for Business</button>
            </div>
          </div>
          <div className="w-[50%] flex items-center justify-center">Right</div>
        </div>
      </div>
    </>
  );
};

export default Landing;
