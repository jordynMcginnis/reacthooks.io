const name = `useWindowCommunication`;

const implementation = `const initialState = {
  lastMessage: undefined,
  messages: []
};

const supportsBroadcastAPI = (() => window && window.BroadcastChannel)();

function useBrowserContextCommunication(channelName) {
  if (channelName === undefined) {
    throw Error('You need to pass a channel name e.g. useBrowserContextCommunication("GreatChannel")');
  }


  const [ state, setMessages ] = useState(initialState);
  let channel;

  if (supportsBroadcastAPI) {
    channel = useRef(new BroadcastChannel(channelName));
  }

  function postMessage(message) {
    if (message) {
      const msg = JSON.stringify({
        message,
        time: Date.now()
      });

      if (supportsBroadcastAPI && channel) {
        channel.current.postMessage(msg);
      } else {
        window.localStorage.setItem(channelName, msg);
      }
    }
  }

  function updateState(data) {
    setMessages(prevState => {
      return {
        lastMessage: data.message,
        messages: prevState.messages.concat(data.message)
      };
    });
  }

  function updateFromLocalStorage(e) {
    const data = JSON.parse(e.newValue);
    updateState(data);
  }

  useEffect(
    () => {
      if (supportsBroadcastAPI) {
        if (channel && channel.current) {
          channel.current.onmessage = e => updateState(JSON.parse(e.data));
        }
      } else {
        window.addEventListener('storage', updateFromLocalStorage);
      }

      return function cleanup() {
        if (channel.current) {
          channel.current.close();
          channel.current = null;
        } else {
          window.localStorage.removeItem(channelName);
          window.removeEventListener('storage', updateFromLocalStorage);
        }
      };
    },
    [ channelName ]
  );

  return [ state, postMessage ];
}`;

const usage = `function App() {
  // state ({lastMessage,messages}) that comes from other browser context
  const [communicationState, postMessage] = useBrowserContextCommunication("channel");
  // Tabs, Windows etc are not listening to there own messages so
  // we need an extra local state
  const [status, setStatus] = useState("login");

  function logout() {
    setStatus("logout");
    postMessage("logout");
  }

  const shouldLogout = [communicationState.lastMessage, status].includes('logout');

  return (
    <div className="App" >
      <h1>{shouldLogout ? 'Logged Out' : 'Logged In' }</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}`;

const url = `https://github.com/AvraamMavridis/react-window-communication-hook`;

export default {
  name,
  implementation,
  usage,
  url,
}