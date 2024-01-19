import "./timer-styles.css";

type Props = {
  time: string | number;
  unit: "days" | "hours" | "minutes" | "seconds";
  customClass?: boolean;
};

function Timer({ time, unit }: Props) {
  return (
    <div className="timer-container">
      <div className="time-box">
        <div className={`top  `}>
          <div className="front"></div>
          <div className="back"></div>
        </div>
        <span>{time}</span>
      </div>
      <div className="time-unit">
        <span>{unit}</span>
      </div>
    </div>
  );
}

export default Timer;
