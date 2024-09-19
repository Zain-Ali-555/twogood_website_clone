/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <>
      <div className="about w-full mt-16 flex h-[45vh] px-5">
        <div className="left w-9/12 pr-40 pt-7">
          <h1 className="abouttxt uppercase text-5xl">
            We believe in people, until they believe in themselves again.
          </h1>
        </div>
        <div className="right w-[40%] pl-7 flex flex-col justify-around">
          <p className="pr-24">
            Everything we do is designed to rebuild self worth and independence,
            in order to break free from the cycle of disadvantage.
          </p>
          <p className="pr-[7.4rem]">
            With every purchase you make with us, you're helping to change the
            course of someone's life; you're walking alongside vulnerable women
            as they find their way home again.
          </p>
          <h5 className="uppercase font-mono text-[12px] mr-[19rem] pb-2 border-b-[1px] border-zinc-800">
            Shop to Support
          </h5>
        </div>
      </div>
    </>
  );
};

export default About;
