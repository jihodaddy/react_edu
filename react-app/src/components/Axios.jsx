import React, { useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState(null);
  const onClick = () => {
    //불러오기 버튼 클릭시 실행
    //onClick 밖에 axios 있을시 setData에서 렌더링이 이뤄지기 떄문에 무한 반복
    //한번만 실행 시키려면 useEffect
    axios
      // get, post, put, ... 통신방식
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((reponse) => {
        setData(reponse.data);
      });
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default Axios;
