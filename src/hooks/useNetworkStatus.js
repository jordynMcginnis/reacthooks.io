const name = `useNetworkStatus`;

const implementation = `function getConnection() {
  return (
    navigator.connection ||
    navigator.mozConnection ||
    navigator.webkitConnection
  );
}

function useNetworkStatus() {
  let [connection, updateNetworkConnection] = useState(getConnection());

  function updateConnectionStatus() {
    updateNetworkConnection(getConnection());
  }
  useEffect(() => {
    connection.addEventListener("change", updateConnectionStatus);
    return () => {
      connection.removeEventListener("change", updateConnectionStatus);
    };
  }, []);

  return connection;
}`;

const usage = `function Demo() {
  let connection = useNetworkStatus();
  return (
    <div>
      <div>downlink: {connection.downlink}</div>
      <div>effectiveType: {connection.effectiveType}</div>
      <div>rtt: {connection.rtt}</div>
      <div>saveData: {connection.saveData ? "yes" : "no"}</div>
    </div>
  );
}`;

const url = `https://github.com/palmerhq/the-platform/`;

const description = `Retrieve network status from the browser.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}