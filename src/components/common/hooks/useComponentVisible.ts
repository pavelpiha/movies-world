import { useCallback, useEffect, useRef, useState } from 'react';

export type UseComponentVisibleType = [
  React.MutableRefObject<any>,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
];

export default function useComponentVisible(
  isVisible: boolean,
  checkInsideContainer: boolean
): UseComponentVisibleType {
  const [isComponentVisible, setIsComponentVisible] = useState(isVisible);
  const ref = useRef(null);

  const onClick = useCallback(
    (event: { target: any }): void => {
      if (checkInsideContainer) {
        if (ref.current && ref.current.contains(event.target)) {
          setIsComponentVisible(!isComponentVisible);
        }
      } else {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsComponentVisible(false);
        }
      }
    },
    [isComponentVisible, checkInsideContainer]
  );

  useEffect(() => {
    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
    };
  }, [onClick]);

  return [ref, isComponentVisible, setIsComponentVisible];
}
