import React from "react";

const SecondTowerTwoFloor = () => {
  return (
    <div className={`ml-[150px] w-[360px]`}>
      <div className={`flex-row mt-20 text-center relative`}>
        {/*  */}
        <div
          className={`flex w-[280px] border-y-2 border-l-2 border-[#000] absolute`}
        >
          <div className={`flex-col `}>
            <div
              className={`w-[120px] h-[120px] border-2 border-[#000] my-0.5 ml-0.5 px-1 py-[32px]`}
            >
              2302ノートPC対応教室
            </div>
            <div
              className={`w-[120px] h-[120px] border-2 border-[#000] my-0.5 ml-0.5 px-1 py-[32px]`}
            >
              2303ノートPC対応教室
            </div>
            <div
              className={`w-[120px] h-[120px] border-2 border-[#000] my-0.5 ml-0.5 px-1 py-[32px]`}
            >
              女子学生専用パウダールーム
            </div>
          </div>
          <div className={`flex-col`}>
            <div className={`w-[40px] h-[240px] m-0.5 px-2 py-1`}></div>
            <div
              className={`w-[155px] h-[120px] border-y-2 border-r-2 border-[#000] my-0.5 absolute py-[45px]`}
            >
              図書室
            </div>
          </div>
          <div
            className={`w-[120px] h-[220px] border-2 border-[#000] m-0.5 px-2 py-[90px]`}
          >
            2301ノートPC対応教室
          </div>
        </div>
        <div className={`flex-col absolute right-0`}>
          <div
            className={`w-[80px] h-[120px] border-l-2 border-b-2 border-[#000] px-2`}
          ></div>
          <div className={`w-[80px] h-[252px] border-r-2 border-b-2 border-[#000] flex flex-row`}>
            <div className={`w-[40px] h-[252px]`}></div>
            <div className={`w-[40px] flex-col`}>
              <div className={`w-[35px] h-[48px] border-2 border-[#000] mt-0.5 mr-0.5`}>WC (女)</div>
              <div className={`w-[35px] h-[48px] border-x-2 border-[#000] mr-0.5`}>WC (男)</div>
              <div className={`w-[35px] h-[30px] border-2 border-[#000] mr-0.5`}>EV</div>
              <div className={`w-[35px] h-[120px] border-x-2 border-b-2 border-[#000] mr-0.5 mb-0.5`}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondTowerTwoFloor;