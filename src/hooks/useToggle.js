const name = `useToggle`;

const implementation= `const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);
  const toggler = useCallback(() => setValue(value => !value));
  return [value, toggler];
};`;

const usage = `function Demo() {
  const [currentValue, toggleAway] = useToggle(true);
  return <div onClick={toggleAway}>{currentValue ? "🍎" : "🍏"}</div>;
}`;

export default {
  name,
  implementation,
  usage
}