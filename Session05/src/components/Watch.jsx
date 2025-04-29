import React, { useState, useRef } from "react";

export default function Watch() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current !== null) return; // tránh start nhiều lần
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setSeconds(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>{seconds} giây</h2>
      <button onClick={start}>Bắt đầu</button>{" "}
      <button onClick={stop}>Dừng</button>{" "}
      <button onClick={reset}>Reset</button>
    </div>
  );
};
