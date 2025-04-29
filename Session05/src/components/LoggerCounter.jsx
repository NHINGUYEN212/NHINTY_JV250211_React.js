import React, { useState, useEffect } from "react";

export default function LoggerCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Giá trị count mới là:", count);
  }, [count]);

  useEffect(() => {
    console.log("Component đã được hiển thị!");
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
};
