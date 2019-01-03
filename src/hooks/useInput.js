const name = `useInput`;

const implementation = `const useInput = initial => {
  const isNumber = typeof initial === "number";
  const [value, setValue] = useState(initial);
  const onChange = useCallback(e => setValue(e.target.value), []);

  return {
    value,
    setValue,
    hasValue:
      value !== undefined &&
      value !== null &&
      (!isNumber ? value.trim && value.trim() !== "" : true),
    clear: useCallback(() => setValue(""), []),
    onChange,
    bindToInput: {
      onChange,
      value
    },
    bind: {
      onChange: setValue,
      value
    }
  };
};`;

const usage = `function Demo() {
  const newTodo = useInput("jouh");
  return (
    <input type="text" value={newTodo.value} onChange={newTodo.onChange} />
  );
}`;

const url = `https://github.com/kitze/react-hanger`;

const description = `This hook allows you to modify the value of an input. Methods include clear, onChangeHandler, bindToInput, and bind.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}