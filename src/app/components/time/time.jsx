import styles from "./time.module.scss";
import { useState, useEffect } from "react";
import { DATE } from "../../config";
import moment from "moment";
import humanizeDuration from "humanize-duration";
const updateTime = () => {
  const now = moment(new Date());
  const end = moment(DATE);
  const duration = moment.duration(now.diff(end));
  const seconds = Math.round(duration.asSeconds()) * 1000;
  return humanizeDuration(seconds).split(",").join("");
};
const Time = () => {
  const [time, setTime] = useState(updateTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(updateTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return <ins className={styles["Time"]}>{time}</ins>;
};

export default Time;
