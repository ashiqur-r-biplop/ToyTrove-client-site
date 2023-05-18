import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[calc(100vh-68px)]">
        <p className="md:text-7xl text-3xl font-thin">ToyTr</p>
        <div className="md:w-10 md:h-10 w-5 h-5 border-2 border-dashed rounded-full animate-spin md:mt-5 mt-3 border-[#32c770]"></div>
        <p className="md:text-7xl text-3xl font-thin">ve....</p>
      </div>
    </>
  );
};

export default Spinner;