import { useRef, useLayoutEffect, useCallback } from "react";

export default function useSafeDispatch(dispatch) {
  const mounted = useRef(false);
  useLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return useCallback(
    (...arg) => (mounted.current ? dispatch(...arg) : void 0),
    [dispatch]
  );
}
