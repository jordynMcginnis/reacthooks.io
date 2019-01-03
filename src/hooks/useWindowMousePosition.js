const name =`useWindowMousePosition`;

const implementation = `function useWindowMousePosition() {
  let [WindowMousePosition, setWindowMousePosition] = useState({
    x: null,
    y: null
  });

  function handleMouseMove(e) {
    setWindowMousePosition({
      x: e.pageX,
      y: e.pageY
    });
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return WindowMousePosition;
}`;

const usage = `function Demo() {
  let { x, y } = useWindowMousePosition();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <pre>{JSON.stringify({ x, y })}</pre>
    </div>
  );
}
`;

const url = `https://github.com/rehooks/window-mouse-position`;

const description = `This hook gets the mouse position on the window.`

export default {
  name,
  implementation,
  usage,
  url,
  description
}