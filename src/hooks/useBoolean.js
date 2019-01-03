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

const description = `This hook has methods that allow you to modify a boolean. Methods include Toggle, setTrue, and setFalse.`;

const url = `https://github.com/kitze/react-hanger`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}