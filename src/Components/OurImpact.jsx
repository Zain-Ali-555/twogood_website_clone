/* eslint-disable react/no-unescaped-entities */
const OurImpact = () => {
  return (
    <>
      <div className="ourimpact w-full pt-60 pb-24 flex gap-5 px-5">
        <div className="left w-1/3 flex flex-col gap-5 pr-20">
          <h1 className="impacttxt text-2xl">OUR IMPACT</h1>
          <p className="impactPara text-[.95rem] ">
            The thing is, we don't save anyone.
          </p>
          <p className="impactPara text-[.95rem] pr-4">
            What we do is provide a safe space for women to change the course of
            their own lives.
          </p>
          <p className="impactPara text-[.95rem] pr-8">
            After many years of living in crisis, abuse and complex trauma,
            restoring self-worth is foundational for independence. We believe
            that through experiences that promote love and respect, we can spark
            and nurture a sense of self-worth for those on the path of healing.
          </p>
          <h5 className="uppercase font-mono text-xs border-b-[1px] border-black mr-[12.8rem]">
            Here's How we do it
          </h5>
        </div>
        <div className="right w-8/12 flex gap-5 pr-5">
          <div className="imgDiv w-1/2 h-[88vh] overflow-hidden rounded-xl">
            <img
              data-scroll
              data-scroll-speed="-.2"
              className="h-[90vh] w-full rounded-xl"
              src="https://cdn.sanity.io/images/w8f1ak3c/production/943f8f43b76b4e030f41deddca1edd44170fee39-5504x8256.jpg/Christina-Maria-Jes-Lindsay-9143.jpg?fp-x=0.5&fp-y=0.5&w=640&h=947&fit=crop&crop=focalpoint&auto=format"
              alt=""
            />
          </div>
          <div className="imgDiv w-1/2 h-[88vh] overflow-hidden rounded-xl">
            <img
              data-scroll
              data-scroll-speed="-.2"
              className="h-[90vh] w-full rounded-xl"
              src="https://cdn.sanity.io/images/w8f1ak3c/production/84da7b8b510e006ce0ca22769d93bb6c044945f6-5504x8256.jpg/Patricia-Work-Work-Good-Stories-Two-Good-Co.jpg?rect=0,56,5504,8144&w=640&h=947&fit=min&auto=format"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="input w-full px-5">
        <input
          className="inputTxt w-full pr-14 bg-[#f7f7f7] placeholder:text-black placeholder:focus-visible:text-transparent uppercase outline-none py-3 text-4xl text-black border-b-[2px] border-zinc-400"
          type="email"
          name="emailInput"
          placeholder="ENTER YOUR EMAIL ADRESS FOR GOOD"
        />
      </div>
    </>
  );
};

export default OurImpact;
