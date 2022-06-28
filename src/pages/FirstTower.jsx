import React from "react";
import { Link } from "react-router-dom";
import FirstTowerFourFloor from "../components/FirstTower/FirstTowerFourFloor";
import FirstTowerThreeFloor from "../components/FirstTower/FirstTowerThreeFloor";
import FirstTowerTwoFloor from "../components/FirstTower/FirstTowerTwoFloor";

const FirstTower = () => {
  const [floor, setFloor] = React.useState(2);
  return (
    <>
      <header>
        <div className="p-5 border-b-2 text-xl font-medium sticky top-0 flex bg-white">
          <Link to="/" className="px-4">
            <img src="./images/logo.png" alt="KitAru" className={`h-8 px-3`} />
          </Link>
          <a href="/#aki" className="px-4">
            空き教室
          </a>
          <a href="/#setubi" className="px-4">
            設備
          </a>
        </div>
      </header>
      <div className={`flex flex-row`}>
        <div className={`w-1/2`}>
          <div className={`flex-col`}>
            {floor === 2 && <FirstTowerTwoFloor />}
            {floor === 3 && <FirstTowerThreeFloor />}
            {floor === 4 && <FirstTowerFourFloor />}
            <div className={`pb-7`}>
              <img
                className={`w-[90px] ml-[270px]`}
                src="./images/FirstTower_stairs.png"
                alt="階段"
              />
            </div>
            <div className={`flex`}>
              <div
                className={`h-[28px] w-[28px] bg-[#ff4c4c] ml-[230px]`}
              ></div>
              <div className={`text-lg`}>・・・予約・授業</div>
              <div className={`h-[28px] w-[28px] bg-[#ffea7f] ml-[20px]`}></div>
              <div className={`text-lg`}>・・・利用中</div>
            </div>
          </div>
        </div>
        <div className={`w-1/2`}>
          <div className={`w-[550px] mt-[50px] ml-[20px] relative `}>
            <img
              src="./images/FirstTower_bg.png"
              alt="1号館"
              className={`absolute`}
            />
            <div className={`absolute w-[400px] mx-[75px] mt-[265px]`}>
              {/* 4階 */}
              <div
                className={`my-[25px] z-10 text-5xl font-bold rounded-xl border-2 text-center ${
                  floor === 4
                    ? `bg-[#ffffff] text-[#f4896e] border-white`
                    : `bg-[#f4896e] text-[#ffffff] hover:bg-[#f7a79b]`
                }`}
                onClick={() => setFloor((floor) => 4)}
              >
                4F
              </div>

              {/* ３階 */}
              <div
                className={`my-[25px] z-10 text-5xl font-bold rounded-xl border-2 text-center ${
                  floor === 3
                    ? `bg-[#ffffff] text-[#f4896e] border-white`
                    : `bg-[#f4896e] text-[#ffffff] hover:bg-[#f7a79b]`
                }`}
                onClick={() => setFloor((floor) => 3)}
              >
                3F
              </div>

              {/* 2階 */}
              <div
                className={`my-[25px] z-10 text-5xl font-bold rounded-xl  text-center border-2 border-white ${
                  floor === 2
                    ? `bg-[#ffffff] text-[#f4896e] border-white`
                    : `bg-[#f4896e] text-[#ffffff] hover:bg-[#f7a79b]`
                }`}
                onClick={() => setFloor((floor) => 2)}
              >
                2F
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstTower;
