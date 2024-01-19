import "./countdown-styles.css";
import Timer from "../timer/timer";
import { useCountdown } from "./use-countdown";

function Countdown() {
  const { time } = useCountdown();

  return (
    <div className="countdown-container">
      <h1>WE'RE LAUNCHING SOON</h1>
      <div className="time-container">
        <Timer time={time.days} unit="days" />
        <Timer time={time.hours} unit="hours" />
        <Timer time={time.minutes} unit="minutes" />
        <Timer time={time.seconds} unit="seconds" customClass />
      </div>
    </div>
  );
}

export default Countdown;
