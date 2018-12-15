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

export default {
  name,
  implementation,
  usage
}