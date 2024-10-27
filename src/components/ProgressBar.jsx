import { useEffect, useState } from "react";

export default function ProgressBar({timer}) {
    const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    console.log("Allah");
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(interval); //this is a clean up fucntion
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
