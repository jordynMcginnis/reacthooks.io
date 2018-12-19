const name =`useWindowSize`;

const implementation = `function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}`;

const usage = `function Demo() {
  const size = useWindowSize();
  return <div>{size.innerWidth}</div>;
}`;

const url = `https://github.com/palmerhq/the-platform/`;

const description = `Returns object containing:

width: Width of browser viewport (window.innerWidth)
height: Height of browser viewport (window.innerHeight)`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}