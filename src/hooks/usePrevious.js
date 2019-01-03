const name = `usePrevious`;

const implementation = `usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};`;

const usage = `const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return (
    <h1>
      Now: {count}, before: {prevCount}
    </h1>
  );
};`;

const url = `https://github.com/kitze/react-hanger`;

const description = `This hook is used to get the previous value of a prop or a state value.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}