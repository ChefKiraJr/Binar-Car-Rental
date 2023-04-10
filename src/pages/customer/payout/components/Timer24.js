import React, { useState, useEffect } from 'react';

const Timer24 = ({ duration }) => {
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

  const getFormattedTime24 = (milliseconds) => {
    let total_seconds = parseInt(Math.floor(milliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hour = parseInt(Math.floor(total_minutes / 60));

    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hour % 60);

    return (
      <p>
        <span className="payout-time__countdown">{hours}</span>:
        <span className="payout-time__countdown">{minutes}</span>:
        <span className="payout-time__countdown">{seconds}</span>
      </p>
    );
  };
  return <div>{getFormattedTime24(time)}</div>;
};

export default Timer24;
