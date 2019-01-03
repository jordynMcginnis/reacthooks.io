const name = `useCreateSelector`;

const implementation = `const createMemoSelector = resolver => dependencies =>
  useMemo(() => resolver(...dependencies), dependencies)

const resolveResolvers = (resolvers, args) =>
  resolvers.map(resolver => resolver(...args))

export const createSelector = resolver => {
  const selector = createMemoSelector(resolver)
  return (...dependencies) => selector(dependencies)
}
`;

const usage = `const useSelector = createSelector(computeExpensiveValue)

function Component({ a, b }) {
  const memoizedValue = useSelector(a, b)
  return <span>{memoizedValue}</span>
}`;

const url = `https://github.com/Andarist/react-selector-hooks`;

const description = `This hook determines if the value returned by an input-selector has changed between calls using reference equality (===).`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}