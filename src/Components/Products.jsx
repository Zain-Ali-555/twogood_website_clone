const Products = () => {
  return (
    <>
      <div className="products relative flex w-full h-screen overflow-hidden">
        <div className="cursor absolute z-10 -translate-x-1/2 -translate-y-1/2  p-32 rounded-full"></div>
        <div className="left w-1/2 h-full">
          <div className="relative z-20 w-full h-full flex flex-col justify-center items-center">
            <img
              className="h-[68%]"
              src="https://cdn.sanity.io/images/w8f1ak3c/production/67981d5df16a3773320a12b140c52689e532c068-2000x2000.png/GreyRust.png?w=1024&h=1024&auto=format"
              alt=""
            />
            <div className="ProductTxt flex flex-col items-center pt-20">
              <h5 className="text-[.75rem]">
                JAC + JACK BUY 1, GIVE 1 BLANKET - GREY/RUST
              </h5>
              <h6 className="text-[.6rem]">$380</h6>
            </div>
          </div>
        </div>
        <div className="right w-1/2 h-full flex flex-col justify-center items-center">
          <div className="relative z-20 w-full h-full flex flex-col justify-center items-center">
            <img
              className="h-[68%]"
              src="https://cdn.sanity.io/images/w8f1ak3c/production/7d180ca25ade6277a215b634318056d551de9da8-5000x5000.png/Website%20Products%20(5).png?w=1024&h=1024&auto=format"
              alt=""
            />
            <div className="ProductTxt flex flex-col items-center pt-20">
              <h5 className="text-[.75rem]">TO GOOD CO. HOODIE</h5>
              <h6 className="text-[.6rem]">$140</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
