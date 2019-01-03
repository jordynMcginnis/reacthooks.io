const name = `useLifecycles`;

const implementation = `const useLifecycles = (mount, unmount) => {
  useEffect(() => {
    if (mount) mount();
    return () => {
      if (unmount) unmount();
    };
  }, []);
};`;

const usage = `function Demo() {
  useLifecycles(() => console.log("MOUNTED"), () => console.log("UNMOUNTED"));
  return null;
}`;

const url = `https://github.com/streamich/react-use/blob/master/docs/useLifecycles.md`;

const description = `This hook calls mount and unmount callbacks, when component is mounted and un-mounted, respectively.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}