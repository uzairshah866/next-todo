"use client";
import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const changeColorInterval = setInterval(() => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      document.body.style.backgroundColor = randomColor;
      document.body.style.color = randomColor;
    }, 10000);

    return () => clearInterval(changeColorInterval);
  }, []);

  return <div>{time.toLocaleTimeString()}</div>;
};

export default Clock;
