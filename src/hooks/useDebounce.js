
const name = `useDebounce`;

const implementation = `const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay]
  );

  return debouncedValue;
};`;

const usage = `function Input() {
  const [text, setText] = useState('Hello');
  const debouncedText = useDebounce(text, 1000);

  return (
    <div>
      <input
        defaultValue={'Hello'}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p>Actual value: {text}</p>
      <p>Debounce value: {debouncedText}</p>
    </div>
  );
}`;

const url = `https://github.com/xnimorz/use-debounce`;

const description = `This hook is for debouncing.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}