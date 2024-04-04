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

      // Check brightness of the color
      const colorBrightness =
        (0.299 * parseInt(randomColor.substr(1, 2), 16) +
          0.587 * parseInt(randomColor.substr(3, 2), 16) +
          0.114 * parseInt(randomColor.substr(5, 2), 16)) /
        255;

      // Set text color based on brightness
      if (colorBrightness > 0.5) {
        document.body.style.color = "#000"; // Dark color for light backgrounds
      } else {
        document.body.style.color = "#fff"; // Light color for dark backgrounds
      }
    }, 10000);

    return () => clearInterval(changeColorInterval);
  }, []);

  return <div className="text-2xl font-bold">{time.toLocaleTimeString()}</div>;
};

export default Clock;
