import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios2 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    //IIFE 즉시실행함수
    const fetch = (async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      setData(response.data);
    })();
  }, []);

  return (
    <div>
      <div>
        <button>불러오기</button>
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

export default Axios2;
