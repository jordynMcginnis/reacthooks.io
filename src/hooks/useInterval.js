const name = `useInterval`;

const implementation= `function useInterval({ startImmediate, duration, callback }) {
  const [count, updateCount] = useState(0);
  const [intervalState, setIntervalState] = useState(
    startImmediate === undefined ? true : startImmediate
  );
  const [intervalId, setIntervalId] = useState(null);

  useEffect(
    () => {
      if (intervalState) {
        const intervalId = setInterval(() => {
          updateCount(count + 1);
          callback && callback();
        }, duration);
        setIntervalId(intervalId);
      }

      return () => {
        if (intervalId) {
          clearInterval(intervalId);
          setIntervalId(null);
        }
      };
    },
    [intervalState, count]
  );
  return {
    intervalId,
    start: () => {
      setIntervalState(true);
    },
    stop: () => {
      setIntervalState(false);
    }
  };
}`;

const usage = `function Demo() {
  const [time, setTime] = useState(null);
  const { start, stop } = useInterval({
    duration: 1000,
    startImmediate: false,
    callback: () => {
      setTime(new Date().toLocaleTimeString());
    }
  });

  return (
    <>
      <div>The time is now {time}</div>
      <button onClick={() => stop()}>Stop interval</button>
      <button onClick={() => start()}>Start interval</button>
    </>
  );
}`;

const url = `https://github.com/kalcifer/react-powerhooks`;

const description = `This hook starts an interval timer that can be stopped/resumed any time. It takes in startImmediate which decides whether the interval is on by default. It also takes a time which is the interval duration.

It provides a start and stop method which allow us to control the state of the interval.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}