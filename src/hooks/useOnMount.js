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

const description = `This hook is used for the onMount lifecycle.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}