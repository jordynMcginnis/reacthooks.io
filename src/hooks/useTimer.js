const name = `useTimer`;

const implementation = `function useTimer(settings) {
  const { autoStart, expiryTimestamp } = settings;

  // Seconds
  const [seconds, setSeconds] = useState(0);
  function addSecond() {
    setSeconds(prevSeconds => {
      if(prevSeconds === 59) {
        addMinute();
        return 0;
      }
      return prevSeconds + 1;
    });
  }


  // Minutes
  const [minutes, setMinutes] = useState(0);
  function addMinute() {
    setMinutes(prevMinutes => {
      if (prevMinutes === 59) {
        addHour();
        return 0;
      }
      return prevMinutes + 1;
    });
  }


  // Hours
  const [hours, setHours] = useState(0);
  function addHour() {
    setHours(prevHours => {
      if (prevHours === 23) {
        addDay();
        return 0;
      }
      return prevHours + 1;
    });
  }

  // Days
  const [days, setDays] = useState(0);
  function addDay() {
    setDays(prevDays => {
      return prevDays + 1;
    });
  }


  // Control function
  const intervalRef = useRef();
  function startTimer() {
    if(!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        if (expiryTimestamp) {
          calculateExpiryDate();
        } else {
          addSecond();
        }
      }, 1000);
    }
  }

  function stopTimer() {
    if(intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  }

  function resetTimer() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
      setSeconds(0);
      setMinutes(0);
      setHours(0);
      setDays(0);
    }
  }

  // Timer expiry date calculation
  function calculateExpiryDate() {
    var now = new Date().getTime();
    var distance = expiryTimestamp - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setSeconds(seconds);
    setMinutes(minutes);
    setHours(hours);
    setDays(days);
  }

  // didMount effect
  useEffect(() => {
    if (autoStart || expiryTimestamp) {
      startTimer();
    }
    return stopTimer;
  },[]);

  return { seconds, minutes, hours, days, startTimer, stopTimer, resetTimer };
}`;

const usage = `function App() {
  const {
    seconds,
    minutes,
    hours,
    days,
    startTimer,
    stopTimer,
    resetTimer,
  } = useTimer({ autoStart: true });


  return (
    <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook Demo</h1>
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}`;

const url = `https://github.com/amrlabib/react-timer-hook`;

export default {
  name,
  implementation,
  usage,
  url,
}