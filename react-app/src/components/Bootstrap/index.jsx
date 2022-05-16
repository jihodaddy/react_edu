import React, { useState } from "react";
import { accordionData, carouselData } from "../datas/bootstrap";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";

const Bootstrap = () => {
  // 토글버튼
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  return (
    <div>
      {/* export된 data를 props로 전달 "props명"={데이타명} */}
      <Accordion data={accordionData} />
      <button onClick={() => setIsShowDropdown((prev) => !prev)}>
        드랍다운
      </button>
      {isShowDropdown && <Dropdown />}
      <Carousel data={carouselData} />
    </div>
  );
};

export default Bootstrap;
