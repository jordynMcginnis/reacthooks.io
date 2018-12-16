import useCreateStructuredSelector from './createStructuredSelector.js';
import useAbortableFetch from './useAbortableFetch.js';
import useActive from './useActive.js';
import useArray from './useArray.js';
import useAsync from './useAsync.js';
import useAudio from './useAudio.js';
import useBattery from './useBattery.js';
import useBoolean from './useBoolean.js';
import useComponentSize from './useComponentSize.js';
import useContextReducer from './useContextReducer.js';
import useCreateSelector from './useCreateSelector.js';
import useCreateStateSelector from './useCreateStateSelector.js';
import useDataLoader from './useDataLoader.js';
import useDebounce from './useDebounce.js';
import useDeviceMotion from './useDeviceMotion.js';
import useDeviceOrientation from './useDeviceOrientation.js';
import useDocumentTitle from './useDocumentTitle.js';
import useDocumentVisibility from './useDocumentVisibility.js';
import useDomLocation from './useDomLocation.js';
import useFavicon from './useFavicon.js';
import useGeolocation from './useGeolocation.js';
//import useGlobalReducer from './useGlobalReducer.js';
import useHover from './useHover.js';
import useInput from './useInput.js';
import useInputValue from './useInput.js';
import useIntersectionObserver from './useIntersectionObserver.js';
import useIntersectionVisibleHook from './useIntersectionVisibleHook.js';
import useInterval from './useInterval.js';
import useLifecycles from './useLifecycles.js';
import useLocalStorage from './useLocalStorage.js';
import useLocation from './useLocation.js';
import useLogger from './useLogger.js';
import useMap from './useMap.js';
import useMedia from './useMedia.js';
import useMemento from './useMemento.js';
import useMount from './useMount.js';
import useNetworkStatus from './useNetworkStatus.js';
import useNumber from './useNumber.js';

const hooks = {
  useCreateStructuredSelector,
  useAbortableFetch,
  useActive,
  useArray,
  useAsync,
  useAudio,
  useBattery,
  useBoolean,
  useComponentSize,
  useContextReducer,
  useCreateSelector,
  useCreateStateSelector,
  useDataLoader,
}

export const hookNames = Object.keys(hooks)

export function getHook (id) {
  return hooks[id]
}
