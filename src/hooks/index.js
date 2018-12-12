import useContextReducer from './useContextReducer.js';

const hooks = {
  useContextReducer,
}

export const hookNames = Object.keys(hooks)

export function getHook (id) {
  return hooks[id]
}
