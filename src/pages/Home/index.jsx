import React from "react";
import WorkTypes from "./Worktypes";
import AutoOil from "./AutoOil";
import Recommendation from "./Recommendation";

const Home = () => {
  return (
    <div className=" ">
      <div className="py-10 bg-[#FAFAFD]">
        <WorkTypes />
      </div>

      <AutoOil />
      <Recommendation />
    </div>
  );
};

export default Home;
