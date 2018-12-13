import useContextReducer from './useContextReducer.js';
import useArray from './useArray.js';

const hooks = {
  useContextReducer,
  useArray,
}

export const hookNames = Object.keys(hooks)

export function getHook (id) {
  return hooks[id]
}
