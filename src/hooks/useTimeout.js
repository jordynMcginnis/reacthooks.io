const name = `useTimeout`;

const implementation = `const useTimeout = (ms = 0) => {
  const [ready, setReady] = useState(false);

  useEffect(
    () => {
      let timer = setTimeout(() => {
        setReady(true);
      }, ms);

      return () => {
        clearTimeout(timer);
      };
    },
    [ms]
  );

  return ready;
};`;

const usage = `function Demo() {
  const ready = useTimeout(2000);

  return <div>Ready: {ready ? "Yes" : "No"}</div>;
}`;

export default {
  name,
  implementation,
  usage
}