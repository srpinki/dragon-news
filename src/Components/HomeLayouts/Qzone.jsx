import React from "react";
import swimmingImage from "../../assets/swimming.png";
import playgroundImage from "../../assets/playground.png";
import classImage from "../../assets/class.png";


const Qzone = () => {
  return (
    <div className="bg-base-200 p-4 font-bold">
      <h2>Q-Zone</h2>
      <div className="space-y-4 ">
        <img src={playgroundImage} alt="" />
        <img src={swimmingImage} alt="" />
        <img src={classImage} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
