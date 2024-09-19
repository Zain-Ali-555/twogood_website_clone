const LandingPage = () => {
  return (
    <>
      <div className="landingPage w-full ">
        <div className="text text-[16.2vw] overflow-hidden flex flex-col uppercase leading-[.85] tracking-tighter pt-60 px-5">
          <h1 className="txt overflow-hidden ">Change</h1>
          <div className="relative z-20 bg-[#f7f7f7] overflow-hidden flex justify-between">
            <h1 className="innerTxt overflow-hidden ">the</h1>
            <h1 className="innerTxt overflow-hidden ">Course</h1>
          </div>
        </div>
        <div className="video relative w-full px-8 mt-5 overflow-hidden">
          <div className="crsr absolute h-1 w-1 p-[15px] rounded-full text-[.3vw] flex justify-center items-center font-medium"></div>
          <video
            loop
            muted
            autoPlay
            className="rounded-lg"
            src="/src/video.mp4"
          ></video>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
