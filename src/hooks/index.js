import useCreateStructuredSelector from './useCreateStructuredSelector.js';
import useAbortableFetch from './useAbortableFetch.js';
import useActive from './useActive.js';
import useArray from './useArray.js';
import useAsync from './useAsync.js';
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
import useOnlineStatus from './useOnlineStatus.js';
import useOnMount from './useOnMount.js';
import useOnUnmount from './useOnUnmount.js';
import usePrevious from './usePrevious.js';
import usePromiseHook from './usePromiseHook.js';
import useRaf from './useRaf.js';
import useSetstate from './useSetstate.js';
import useSpeech from './useSpeech.js';
import useTimeout from './useTimeout.js';
import useTimer from './useTimer.js';
import useTitle from './useTitle.js';
import useToggle from './useToggle.js';
import useUnmount from './useUnmount.js';
import useUpdate from './useUpdate.js';
import useWait from './useWait.js';
import useWindowCommunication from './useWindowCommunication.js';
import useWindowMousePosition from './useWindowMousePosition.js';
import useWindowScrollPosition from './useWindowScrollPosition.js';
import useWindowSize from './useWindowSize.js';

const hooks = {
  useAbortableFetch,
  useActive,
  useArray,
  useAsync,
  useBattery,
  useBoolean,
  useComponentSize,
  useContextReducer,
  useCreateStructuredSelector,
  useCreateSelector,
  useCreateStateSelector,
  useDataLoader,
  useDebounce,
  useDeviceMotion,
  useDeviceOrientation,
  useDocumentTitle,
  useDocumentVisibility,
  useDomLocation,
  useFavicon,
  useGeolocation,
  useHover,
  useInput,
  useInputValue,
  useIntersectionObserver,
  useIntersectionVisibleHook,
  useInterval,
  useLifecycles,
  useLocalStorage,
  useLocation,
  useLogger,
  useMap,
  useMedia,
  useMemento,
  useMount,
  useNetworkStatus,
  useNumber,
  useOnlineStatus,
  useOnMount,
  useOnUnmount,
  usePrevious,
  usePromiseHook,
  useRaf,
  useSetstate,
  useSpeech,
  useTimeout,
  useTimer,
  useTitle,
  useToggle,
  useUnmount,
  useUpdate,
  useWait,
  useWindowCommunication,
  useWindowMousePosition,
  useWindowScrollPosition,
  useWindowSize,
}

export const hookNames = Object.keys(hooks)

export function getHook (id) {
  return hooks[id]
}