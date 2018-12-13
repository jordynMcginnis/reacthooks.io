const name = 'useBoolean';

const implementation = `const useBoolean = (initial) => {
  const [value, setValue] = useState(initial);
  return {
    value,
    setValue,
    toggle: useCallback(() => setValue(value => !value)),
    setTrue: useCallback(() => setValue(true)),
    setFalse: useCallback(() => setValue(false)),
  }
}`;

const usage = `function usage() {
  const toggle = useBoolean(false);
  return toggle.value
}`;

export default {
  name,
  implementation,
  usage
}