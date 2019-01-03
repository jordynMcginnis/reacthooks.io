const name = `useMount`;

const implementation = `const useMount = mount => useEffect(mount, []);
`;

const usage = `function Demo() {
  useMount(() => console.log("MOUNTED"));
  return null;
}`;

const url = `https://github.com/streamich/react-use/blob/master/docs/useMount.md`;

const description = `This hook calls a mount callback, when the component is mounted.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}