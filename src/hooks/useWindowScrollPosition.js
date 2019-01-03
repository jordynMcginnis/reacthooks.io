const name = `useWindowScrollPosition`;

const implementation = `// We need to import lodash throttle if we want to throttle our scroll events
// import throttle from 'lodash.throttle';

const useWindowScrollPosition = (options = {}) => {
  const { throttleMs = 100 } = options;
  const [scroll, setScroll] = React.useState({
    x: window.pageXOffset,
    y: window.pageYOffset
  });

  const handle = throttle(() => {
    setScroll({
      x: window.pageXOffset,
      y: window.pageYOffset
    });
  }, throttleMs);

  React.useEffect(() => {
    window.addEventListener("scroll", handle);

    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, []);

  return scroll;
};`;

const usage = `function Demo() {
  const { x, y } = useWindowScrollPosition();

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <pre>{JSON.stringify({ x, y })}</pre>
    </div>
  );
}`;

const url = `https://github.com/palmerhq/the-platform/`;

const description = `This hook gets the horizontal and vertical position of the window scroll.`

export default {
  name,
  implementation,
  usage,
  url,
  description
}