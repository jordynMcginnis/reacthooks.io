const name = `usePromiseHook`;

const implementation = `const usePromise = (
  fn,
  { resolve = false, resolveCondition = [] } = {}
) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(resolve);
  const [lastUpdated, setLastUpdated] = useState();
  const [error, setError] = useState();

  const request = (...args) => {
    /*
    Using isValid guard, in order to prevent the cleanup warning.
    */
    let isValid = true;
    setLoading(true);

    fn(...args)
      .then(result => {
        if (!isValid) return;

        setData(result);
        setLastUpdated(Date.now());
      })
      .catch(err => {
        if (!isValid) return;

        setError(err);
      })
      .finally(() => {
        if (!isValid) return;

        setLoading(false);
      });

    /*
    When component will be unmounted, isValid will become false and state setter
    functions will not be envoked on unmounted component.
    */
    return () => {
      isValid = false;
    };
  };

  if (resolve) {
    useEffect(request, resolveCondition);
  }

  return {
    request,
    data,
    isLoading,
    lastUpdated,
    error
  };
};`;

const usage = `const Movies = () => {
  const { isLoading, data } = usePromise(fetchMovies, { resolve: true });

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {data.map(movie => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

const fetchMovies = () =>
  fetch(\`http://your-amazing-api.com/movies\`).then(res => res.json());`;

const url = `https://github.com/aiven715/promise-hook`;

const description = ``;

export default {
  name,
  implementation,
  usage,
  url,
  description
}