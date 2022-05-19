import React, { useState } from "react";
import { accordionData, carouselData } from "../datas/bootstrap";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";
import ModalName from "./ModalName";

const Bootstrap = () => {
  // 토글버튼
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [isShowModalName, setIsShowModalName] = useState(false);
  const [name, setName] = useState("홍길동");

  return (
    <div>
      {/* export된 data를 props로 전달 "props명"={데이타명} */}
      <Accordion data={accordionData} />
      <button onClick={() => setIsShowDropdown((prev) => !prev)}>
        드랍다운
      </button>
      {isShowDropdown && <Dropdown />}
      <Carousel data={carouselData} />

      <h1>이름 : {name}</h1>
      <button onClick={() => setIsShowModalName(true)}>이름바꾸기</button>
      {isShowModalName && (
        <ModalName
          name={name}
          onClose={() => setIsShowModalName(false)}
          onSubmit={(val) => setName(val)}
        />
      )}
    </div>
  );
};

export default Bootstrap;
