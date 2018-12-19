const name = `useCreateStructuredSelector`;

const implementation = `const createMemoSelector = resolver => dependencies =>
  useMemo(() => resolver(...dependencies), dependencies)

const resolveResolvers = (resolvers, args) =>
  resolvers.map(resolver => resolver(...args))

export const createSelector = resolver => {
  const selector = createMemoSelector(resolver)
  return (...dependencies) => selector(dependencies)
}

export const createStateSelector = (dependencyResolvers, resolver) => {
  const selector = createMemoSelector(resolver)
  return (...args) => selector(resolveResolvers(dependencyResolvers, args))
}

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

const description =``;

const url = `https://github.com/Andarist/react-selector-hooks`;

export default {
  name,
  implementation,
  usage
}