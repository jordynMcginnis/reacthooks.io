const name = `useCreateStructuredSelector`;

const implementation = `const createMemoSelector = resolver => dependencies =>
  useMemo(() => resolver(...dependencies), dependencies)

const resolveResolvers = (resolvers, args) =>
  resolvers.map(resolver => resolver(...args))

export const createStructuredSelector = (dependencyResolversMap, resolver) => {
  const keys = Object.keys(dependencyResolversMap)
  const dependencyResolvers = keys.map(key => dependencyResolversMap[key])
  return (...args) => {
    const dependencies = resolveResolvers(dependencyResolvers, args)
    return useMemo(
      () =>
        resolver(
          keys.reduce((value, key, index) => {
            value[key] = dependencies[index]
            return value
          }, {}),
        ),
      dependencies,
    )
  }
}`;

const usage = `const useSelector = createSelector(computeExpensiveValue)

function Component({ a, b }) {
  const memoizedValue = useSelector(a, b)
  return <span>{memoizedValue}</span>
}`;

const url = `https://github.com/Andarist/react-selector-hooks`;

const description = `This hook returns an object with the same keys as the inputSelectors argument, but with the selectors replaced with their values.`;

export default {
  name,
  implementation,
  usage,
  url,
  description
}