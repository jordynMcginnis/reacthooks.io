const name = `useUpdate`;

const implementation = `const useUpdate = () => useState(0)[1];
`;

const usage = `function Demo() {
  const update = useUpdate();
  return (
    <>
      <div>Time: {Date.now()}</div>
      <button onClick={update}>Update</button>
    </>
  );
}`;

const url = `https://github.com/streamich/react-use/blob/master/docs/useUpdate.md`;

const description = `This hook returns true after a specified number of milliseconds.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}