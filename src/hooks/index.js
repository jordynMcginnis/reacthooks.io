import useContextReducer from './useContextReducer.js';
import useArray from './useArray.js';
import useBoolean from './useBoolean.js';
import useInput from './useInput.js';

const hooks = {
  useContextReducer,
  useArray,
  useBoolean,
}

export const hookNames = Object.keys(hooks)

export function getHook (id) {
  return hooks[id]
}
