import useTimer from "./useTimer";
import { formatTime } from "./formatTime";
import { useEffect, useState, useRef } from "react";
import Timer from "./Timer";

function App() {
  const {
    time,
    splits,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    active,
  } = useTimer(0);
  const [isTicking, setIsTicking] = useState(false);
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (!isFirstRender.current) {
      setIsTicking(true);
    }
    isFirstRender.current = false;
  }, [time]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsTicking(false);
    }, 250);

    return () => {
      clearTimeout(timeOut);
    };
  }, [isTicking]);

  return (
    <>
      <div className="App container">
        <Timer
          isTicking={isTicking}
          formatTime={formatTime}
          time={time}
          stopTimer={stopTimer}
          active={active}
          startTimer={startTimer}
          resetTimer={resetTimer}
          splitTimer={splitTimer}
          splits={splits}
        />
      </div>
    </>
  );
}

export default App;
