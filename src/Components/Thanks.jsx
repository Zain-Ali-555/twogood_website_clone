const Thanks = () => {
  return (
    <>
      <div className="thanks relative w-full">
        <div className="start flex justify-between w-full border-b-[1px] border-black px-5">
          <h5 className="thanksTxt text-[.9]">Words of Goodness</h5>
          <h5 className="thanksTxt text-[.9]">Messages of Love & Support</h5>
        </div>
        <h1 className="mainTxt text-[4rem] px-[10rem] text-center uppercase py-20 tracking-tight leading-none   ">
          Thank you so much for the beautiful catering; it means a lot working
          with a company such as Two Good Co.
        </h1>
        <div className="btnDiv flex justify-center items-center">
          <h5 className="btnTxt bg-black text-[.7rem]  text-white px-[5rem] py-5 text-center font-semibold rounded-full">
            SEND YOUR OWN MESSAGE
          </h5>
        </div>
        <p className="txtAfterBtn text-center text-[.95rem] px-[33rem] pt-8 leading-[1.2]">
          Sometimes it’s the smallest actions that can make the biggest impact.
        </p>
      </div>
    </>
  );
};

export default Thanks;
