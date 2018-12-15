const name = `useLocation`;

const implementation = `const isClient = typeof window === "object";
const on = (obj, ...args) => obj.addEventListener(...args);
const off = (obj, ...args) => obj.removeEventListener(...args);

const patchHistoryMethod = method => {
  const original = history[method];

  history[method] = function(state) {
    const result = original.apply(this, arguments);
    const event = new Event(method.toLowerCase());

    event.state = state;

    window.dispatchEvent(event);

    return result;
  };
};

if (isClient) {
  patchHistoryMethod("pushState");
  patchHistoryMethod("replaceState");
}

const useLocation = () => {
  const buildState = trigger => {
    const { state, length } = history;

    const {
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search
    } = location;

    return {
      trigger,
      state,
      length,
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search
    };
  };

  const [state, setState] = useState(
    isClient
      ? buildState("load")
      : {
          trigger: "load",
          length: 1
        }
  );

  const onChange = trigger => setState(buildState(trigger));

  const onPopstate = () => onChange("popstate");
  const onPushstate = () => onChange("pushstate");
  const onReplacestate = () => onChange("replacestate");

  useEffect(
    () => {
      on(window, "popstate", onPopstate);
      on(window, "pushstate", onPushstate);
      on(window, "replacestate", onReplacestate);

      return () => {
        off(window, "popstate", onPopstate);
        off(window, "pushstate", onPushstate);
        off(window, "replacestate", onReplacestate);
      };
    },
    [0]
  );

  return state;
};`;

const usage = `function Demo() {
  const state = useLocation();

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
}`;

export default {
  name,
  implementation,
  usage
}