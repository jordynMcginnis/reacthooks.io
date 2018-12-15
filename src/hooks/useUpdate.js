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

export default {
  name,
  implementation,
  usage
}