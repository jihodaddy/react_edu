import React, { useRef } from "react";

const InputFile = () => {
  const fileEl = useRef(null);

  return (
    <div>
      <button onClick={() => fileEl.current.click()}>업로드</button>
      <input type="file" style={{ display: "none" }} ref={fileEl} />
    </div>
  );
};

export default InputFile;
