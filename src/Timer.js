import React from "react";

function Timer({
  isTicking,
  formatTime,
  time,
  stopTimer,
  active,
  startTimer,
  resetTimer,
  splitTimer,
  splits,
}) {
  return (
    <>
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p className={isTicking ? "ticking" : ""}>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button className="button" onClick={splitTimer}>
            Split
          </button>
        </div>
        <div className="splits">
          {splits.map((split, index) => (
            <p key={index}>{`Split ${index + 1} - ${formatTime(split)}`}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Timer;
