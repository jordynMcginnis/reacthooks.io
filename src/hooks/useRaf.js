const name = `useRaf`;

const implementation = `const useRaf = (ms = 1e12, delay = 0) => {
  const [elapsed, set] = useState(0);

  useEffect(
    () => {
      let raf, timerStop, start;

      const onFrame = () => {
        const time = Math.min(1, (Date.now() - start) / ms);
        set(time);
        loop();
      };
      const loop = () => {
        raf = requestAnimationFrame(onFrame);
      };
      const onStart = () => {
        timerStop = setTimeout(() => {
          cancelAnimationFrame(raf);
          set(1);
        }, ms);
        start = Date.now();
        loop();
      };
      const timerDelay = setTimeout(onStart, delay);

      return () => {
        clearTimeout(timerStop);
        clearTimeout(timerDelay);
        cancelAnimationFrame(raf);
      };
    },
    [ms, delay]
  );

  return elapsed;
};`;

const usage = ``;

export default {
  name,
  implementation,
  usage
}