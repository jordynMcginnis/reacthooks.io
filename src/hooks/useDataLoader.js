const name = `useDataLoader`;

const implementation = `const reducer = (state, action) => {
  switch (action.type) {
    case 'get':
      return { ...state, loading: true }
    case 'success':
      return {
        ...state,
        data: action.payload.data,
        error: null,
        loading: false,
      }
    case 'error':
      return {
        ...state,
        data: null,
        error: action.payload.error,
        loading: false,
      }
    default:
      return state
  }
}

const useDataLoader = (getData, ...args) => {
  const [nonce, setNonce] = useState(Date.now())
  const [state, dispatch] = useReducer(reducer, {
    data: null,
    error: null,
    loading: true,
  })

  useEffect(
    () => {
      let cancel = false

      dispatch({ type: 'get' })
      getData(...args)
        .then(data => {
          !cancel && dispatch({ type: 'success', payload: { data } })
        })
        .catch(error => {
          !cancel && dispatch({ type: 'error', payload: { error } })
        })

      return () => {
        cancel = true
      }
    },
    [nonce, ...args],
  )

  const retry = () => {
    setNonce(Date.now())
  }

  return { ...state, retry }
}`;

const usage = `async function getData(id) {
  /* async api call */

  return 'item ' + id
}

function Example({ id }) {
  const { data, error, loading, retry } = useDataLoader(getData, id)

  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return <ViewData data={data} />
}

function App() {
  return <Example id={3} />
}`;

const url = `https://github.com/smmoosavi/react-use-data-loader`;

const description = `This hook is used for data loading.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}