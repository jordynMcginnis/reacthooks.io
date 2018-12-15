const name = `useMount`;

const implementation = `const useMount = mount => useEffect(mount, []);
`;

const usage = `function Demo() {
  useMount(() => console.log("MOUNTED"));
  return null;
}`;

export default {
  name,
  implementation,
  usage
}