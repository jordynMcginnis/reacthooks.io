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

const url = `https://github.com/streamich/react-use/blob/master/docs/useMedia.md`;

const description = `React sensor hook that tracks state of a CSS media query.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}