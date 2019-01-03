const name = `useCreateStateSelector`;

const implementation = `const createMemoSelector = resolver => dependencies =>
  useMemo(() => resolver(...dependencies), dependencies)

const resolveResolvers = (resolvers, args) =>
  resolvers.map(resolver => resolver(...args))

export const createStateSelector = (dependencyResolvers, resolver) => {
  const selector = createMemoSelector(resolver)
  return (...args) => selector(resolveResolvers(dependencyResolvers, args))
}
`;

const usage = `const useSelector = createSelector(computeExpensiveValue)

function Component({ a, b }) {
  const memoizedValue = useSelector(a, b)
  return <span>{memoizedValue}</span>
}`;

const url = `https://github.com/Andarist/react-selector-hooks`;

const description = `This hook `;

export default {
  name,
  implementation,
  usage,
  url,
  description
}