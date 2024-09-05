import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(0);
  const [splits, setSplits] = useState([]);

  const isStart = useRef(true);
  const active = useRef();
  const refInterval = useRef(0);

  const startTimer = () => {
    active.current.disabled = true;
    isStart.current = true;
    refInterval.current = setInterval(() => {
      if (isStart.current) {
        setTime((time) => time + 1);
      }
    }, 1000);
  };
  const stopTimer = () => {
    active.current.disabled = false;
    clearInterval(refInterval.current);
  };
  const resetTimer = () => {
    setTime(0);
    setSplits([]);
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };

  const splitTimer = () => {
    setSplits((prevSplits) => [...prevSplits, time]);
  };

  return {
    time,
    splits,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    active,
  };
};
export default useTimer;
