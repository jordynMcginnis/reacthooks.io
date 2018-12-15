const name = `useMedia`;

const implementation = `const useMedia = (query, defaultState = false) => {
  const [state, setState] = useState(defaultState);

  useEffect(
    () => {
      let mounted = true;
      const mql = window.matchMedia(query);
      const onChange = () => {
        if (!mounted) return;
        setState(!!mql.matches);
      };

      mql.addListener(onChange);
      setState(mql.matches);

      return () => {
        mounted = false;
        mql.removeListener(onChange);
      };
    },
    [query]
  );

  return state;
};`;

const usage = `function Demo() {
  const isWide = useMedia("(min-width: 480px)");

  return <div>Screen is wide: {isWide ? "Yes" : "No"}</div>;
}`;

export default {
  name,
  implementation,
  usage
}