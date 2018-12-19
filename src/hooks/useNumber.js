const name = `useNumber`;

const implementation = `const useStateful = initial => {
  const [value, setValue] = useState(initial);
  return {
    value,
    setValue
  };
};

const useNumber = (
  initial,
  { upperLimit, lowerLimit, loop, step = 1 } = {}
) => {
  const [value, setValue] = useState(initial);
  return {
    value,
    setValue,
    increase: useCallback(i => {
      setValue(value => {
        const increaseBy = i !== undefined ? i : step;
        const nextValue = value + increaseBy;

        return upperLimit !== undefined
          ? nextValue - increaseBy < upperLimit
            ? nextValue
            : loop === true
              ? initial
              : value
          : nextValue;
      });
    }, []),
    decrease: useCallback(d => {
      setValue(value => {
        const decreaseBy = d !== undefined ? d : step;
        const nextValue = value - decreaseBy;

        return lowerLimit !== undefined
          ? nextValue + decreaseBy > lowerLimit
            ? nextValue
            : loop === true
              ? upperLimit
              : value
          : nextValue;
      });
    }, [])
  };
};`;

const usage = `const App = () => {
  const newTodo = useInput("");
  const showCounter = useBoolean(true);
  const limitedNumber = useNumber(3, { lowerLimit: 0, upperLimit: 5 });
  const counter = useNumber(0);
  const todos = useArray(["hi there", "sup", "world"]);

  const rotatingNumber = useNumber(0, {
    lowerLimit: 0,
    upperLimit: 4,
    loop: true
  });

  useOnMount(() => console.log("hello world"));
  useOnUnmount(() => console.log("goodbye world"));

  return (
    <div>
      <button onClick={showCounter.toggle}> toggle counter </button>
      <button onClick={counter.increase}> increase </button>
      {showCounter.value && <span> {counter.value} </span>}
      <button onClick={counter.decrease}> decrease </button>
      <button onClick={todos.clear}> clear todos </button>
      <input
        type="text"
        value={newTodo.value}
        onChange={newTodo.onChange}
      />
    </div>
  );
};`;

const url = `https://github.com/kitze/react-hanger`;

const description = ``;

export default {
  name,
  implementation,
  usage,
  url,
  description
}