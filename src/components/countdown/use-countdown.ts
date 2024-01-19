import { useEffect, useState } from "react";

const INITIAL_TIME = { days: 10, hours: 0, minutes: 0, seconds: 0 };

export function useCountdown() {
  const [time, setTime] = useState(INITIAL_TIME);

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate days, hours, minutes, and seconds
      const totalSeconds =
        time.days * 24 * 60 * 60 +
        time.hours * 60 * 60 +
        time.minutes * 60 +
        time.seconds -
        1;

      if (totalSeconds >= 0) {
        const newDays = Math.floor(totalSeconds / (24 * 60 * 60));
        const newHours = Math.floor((totalSeconds % (24 * 60 * 60)) / 3600);
        const newMinutes = Math.floor((totalSeconds % 3600) / 60);
        const newSeconds = totalSeconds % 60;

        setTime({
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        });
        return;
      }

      // When the countdown reaches zero, you can handle any desired action
      clearInterval(timer);
      alert("Countdown has reached zero!");
      setTime(INITIAL_TIME);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return {
    time,
  };
}
