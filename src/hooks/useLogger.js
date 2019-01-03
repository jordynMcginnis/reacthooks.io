const name = `useLogger`;

const implementation = `function useLifecycles (mount, unmount) {
   useEffect(() => {
     if (mount) mount();
     return () => {
       if (unmount) unmount();
     };
   }, []);
 };

 const useLogger = (name, props) => {
   useLifecycles(
     () => console.log(\`${name} mounted\`),
     () => console.log(\`${name} un-mounted\`)
   );
   useEffect(() => {
     console.log(\`${name} props updated\`, props);
   });
 };`;

const usage = `function Demo(props) {
  useLogger("Demo", props);
  return null;
}`;

const url = `https://github.com/streamich/react-use/blob/master/docs/useLogger.md`;

const description = `This hook logs in the console as component transitions through life-cycles.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}