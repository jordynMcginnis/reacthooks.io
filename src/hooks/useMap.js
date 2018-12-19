const name = `useMap`;

const implementation= `function useMap(initial) {
  const [mapValue, setMapValue] = useState(() => initial);

  return {
    values: mapValue,
    clear: () => setMapValue({}),
    reset: () => setMapValue(initial),
    set: (key, updater) => {
      setMapValue(prev =>
        Object.assign(prev, {
          [key]: typeof updater === "function" ? updater(prev[key]) : updater
        })
      );
    },
    get: key => mapValue[key],
    has: key => mapValue[key] != null,
    delete: key => setMapValue(({ [key]: deleted, ...prev }) => prev)
  };
}`;

const usage = `function Demo() {
  const {
    set: setKey,
    get: getKey,
    has,
    delete: deleteKey,
    clear,
    reset,
    values
  } = useMap({ name: "PK", age: "30", occupation: "Reactor" });

  return JSON.stringify(values);
}`;

const url = `https://github.com/kalcifer/react-powerhooks`;

const description = `This hook allows you to use a map object and get methods to manipulate the map. Takes an initialValue`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}