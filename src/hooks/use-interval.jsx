import { useRef, useEffect } from "react";

const useInterval = (callback, delay) => {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      console.log("id", id);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
