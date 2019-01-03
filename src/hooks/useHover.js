const name = `useHover`;

const implementation = `const useHover = element => {
  const [state, setState] = useState(false);
  const noop = () => {};
  const onMouseEnter = originalOnMouseEnter => event => {
    (originalOnMouseEnter || noop)(event);
    setState(true);
  };
  const onMouseLeave = originalOnMouseLeave => event => {
    (originalOnMouseLeave || noop)(event);
    setState(false);
  };

  if (typeof element === "function") {
    element = element(state);
  }

  const el = React.cloneElement(element, {
    onMouseEnter: onMouseEnter(element.props.onMouseEnter),
    onMouseLeave: onMouseLeave(element.props.onMouseLeave)
  });

  return [el, state];
};`;

const usage = `function Demo() {
  const element = hovered => <div>Hover me! {hovered && "Thanks!"}</div>;
  const [hoverable, hovered] = useHover(element);

  return (
    <div>
      {hoverable}
      <div>{hovered ? "HOVERED" : ""}</div>
    </div>
  );
}`;

const url = `https://github.com/streamich/react-use/blob/master/docs/useHover.md`;

const description = `This hook tracks if an element is being hovered by a mouse.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}