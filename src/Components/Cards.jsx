import { IoIosArrowForward } from "react-icons/io";

const Cards = () => {
  return (
    <>
      <div className="cards flex gap-5 px-5 mt-24 border-t-[1px] border-zinc-700 w-full">
        <div className="card1 flex justify-center items-center rounded-xl relative w-1/3 h-[100vh] overflow-hidden mt-4">
          <div
            data-scroll
            data-scroll-speed="-.15"
            className="imgbtn absolute z-10 bg-[#f5dfcf] px-8 py-4 rounded-full flex gap-12 items-center"
          >
            <div className="circle bg-black w-2 h-2 rounded-full"></div>
            <h5 className="text-xs ">SHOP</h5>
            <h5 className="text-xs font-bold">PANTRY</h5>
            <div className="text-xs arrow">
              <IoIosArrowForward />
            </div>
          </div>
          <img
            data-scroll
            data-scroll-speed="-.1"
            className="rounded-xl h-full"
            src="https://cdn.sanity.io/images/w8f1ak3c/production/9032e317a6741221ae543fdae5d05160819f9a44-1500x2250.jpg/DSC0079_Dexter%20Kim.jpg?rect=0,0,1500,2008&fp-x=0.47794117647058826&fp-y=0.4461323529411765&w=640&h=1067&fit=crop&crop=focalpoint&auto=format"
            alt=""
          />
        </div>
        <div className="card2 flex justify-center items-center rounded-xl relative w-1/3 h-[100vh] overflow-hidden mt-4">
          <div
            data-scroll
            data-scroll-speed="-.15"
            className="imgbtn absolute z-10 bg-[#d9dfea] px-8 py-4 rounded-full flex gap-12 items-center"
          >
            <div className="circle bg-black w-2 h-2 rounded-full"></div>
            <h5 className="text-xs ">SHOP</h5>
            <h5 className="text-xs font-bold">HOME</h5>
            <div className="text-xs arrow">
              <IoIosArrowForward />
            </div>
          </div>
          <img
            data-scroll
            data-scroll-speed="-.1"
            className="rounded-xl h-full"
            src="https://cdn.sanity.io/images/w8f1ak3c/production/138e191deead80c5c8e9a982c20987f8f83c1f27-5504x8256.jpg/JTG_2919%20copy.jpg?rect=276,0,4952,8256&w=640&h=1067&fit=min&auto=format"
            alt=""
          />
        </div>
        <div className="card3 flex justify-center items-center rounded-xl relative w-1/3 h-[100vh] overflow-hidden mt-4">
          <div
            data-scroll
            data-scroll-speed="-.15"
            className="imgbtn absolute z-10 bg-[#ffffff] px-8 py-4 rounded-full flex gap-12 items-center"
          >
            <div className="circle bg-black w-2 h-2 rounded-full"></div>
            <h5 className="text-xs ">SHOP</h5>
            <h5 className="text-xs font-bold">BATH</h5>
            <div className="text-xs arrow">
              <IoIosArrowForward />
            </div>
          </div>
          <img
            data-scroll
            data-scroll-speed="-.1"
            className="rounded-xl h-full"
            src="https://cdn.sanity.io/images/w8f1ak3c/production/d3151106849ff2494d66916cf554c68a0603444d-902x1500.png/Rectangle%20220.png?rect=1,0,900,1500&w=640&h=1067&fit=min&auto=format"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
