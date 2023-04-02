import { useEffect, useState } from "react";

/**
 Returns the width and height of the window element
 the return structure is [width, height]
*/
export const useSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function windowChange() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    windowChange();
    window.addEventListener("resize", windowChange);
    return () => {
      window.removeEventListener("resize", windowChange);
    };
  }, []);

  return size;
};
