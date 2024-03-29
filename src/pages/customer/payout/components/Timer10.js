import React, { useState, useEffect } from 'react';

const Timer10 = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time < 1) {
      clearInterval();
    } else {
      setTimeout(() => {
        setTime(time - 1000);
      }, 1000);
    }
  }, [time]);

  const getFormattedTime = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);

    return (
      <p className="payout-time__header">
        <span className="payout-time__countdown">{minutes}</span>:
        <span className="payout-time__countdown">{seconds}</span>
      </p>
    );
  };
  return <div>{getFormattedTime(time)}</div>;
};

export default Timer10;
