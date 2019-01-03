const name = `useWait`;

const implementation = `const anyWaiting = waiters => waiters.length > 0;

const isWaiting = (waiters, waiter) => waiters.includes(waiter);

const startWaiting = (waiters, waiter) => {
  if (isWaiting(waiters, waiter)) return waiters;
  return [...waiters, waiter];
};

const endWaiting = (waiters, waiter) => {
  return waiters.filter(w => w !== waiter);
};

const WaitingContext = React.createContext();

function Wait(props) {
  const context = useContext(WaitingContext);
  return context.waiters.includes(props.on) ? props.fallback : props.children;
}

function Waiter(props) {
  const [waiters, setWaiters] = useState([]);

  return (
    <WaitingContext.Provider
      value={{
        waiters,
        createWaitingContext: waiter => ({
          isWaiting: () => isWaiting(waiters, waiter),
          startWaiting: () => setWaiters(startWaiting(waiters, waiter)),
          endWaiting: () => setWaiters(endWaiting(waiters, waiter)),
          Wait: props => <Wait on={waiter} {...props} />
        }),
        anyWaiting: () => anyWaiting(waiters),
        isWaiting: waiter => isWaiting(waiters, waiter),
        startWaiting(waiter) {
          setWaiters(startWaiting(waiters, waiter));
        },
        endWaiting(waiter) {
          setWaiters(endWaiting(waiters, waiter));
        }
      }}
    >
      {props.children}
    </WaitingContext.Provider>
  );
}

function useWait() {
  const context = useContext(WaitingContext);
  return {
    ...context,
    Wait
  };
}`;

const usage = `function UserCreateButton() {
  const { startWaiting, endWaiting, isWaiting, Wait } = useWait();

  return (
    <button
      onClick={() => startWaiting("creating user")}
      disabled={isWaiting("creating user")}
    >
      <Wait on="creating user" fallback={<div>Creating user!</div>}>
        Create User
      </Wait>
    </button>
  );
}`;

const url = `https://github.com/f/react-wait`;

const description = `This hook helps to manage multiple loading states on the page without any conflict.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}