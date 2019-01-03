const name = `useInputValue`;

const implementation = `function useInputValue(initialValue) {
  let [value, setValue] = useState(initialValue);

  function onChange(event) {
    setValue(event.currentTarget.value);
  }

  return {
    value,
    onChange
  };
}`;

const usage = `function Demo() {
  let name = useInputValue("Jamie");
  // name = { value: 'Jamie', onChange: [Function] }
  return <input {...name} />;
}`;

const url = `https://github.com/rehooks/input-value`;

const description = `This hook is used for creating input values.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}