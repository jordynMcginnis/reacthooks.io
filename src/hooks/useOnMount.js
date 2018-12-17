const name = `useOnMount`;

const implementation = `const useOnMount = onMount =>
  useEffect(() => {
    onMount && onMount();
  }, []);`;

const usage = `function Demo() {
  useOnMount(() => console.log("hello world"));
  return <div />;
}`;

const url = `https://github.com/kitze/react-hanger`;

export default {
  name,
  implementation,
  usage,
  url
}