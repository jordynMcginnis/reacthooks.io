const name = `useLocalStorage`;

const implementation = `function useLocalStorage(key) {
  let localStorageItem;
  if (key) {
    localStorageItem = localStorage[key];
  }
  const [localState, updateLocalState] = useState(localStorageItem);
  function syncLocalStorage(event) {
    if (event.key === key) {
      updateLocalState(event.newValue);
    }
  }
  useEffect(() => {
    window.addEventListener("storage", syncLocalStorage);
    return () => {
      window.removeEventListener("storage", syncLocalStorage);
    };
  }, []);
  return localState;
}
`;

const usage = `function Demo() {
  let name = useLocalStorage("name"); // send the key to be tracked.
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}`;

export default {
  name,
  implementation,
  usage
}