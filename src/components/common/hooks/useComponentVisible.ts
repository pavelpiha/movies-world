import { useEffect, useRef, useState } from 'react';

export default function useComponentVisible(initialIsVisible: boolean): any {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const onClickInternalOutside = (event: { target: any }): void => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClickInternalOutside, true);
    return () => {
      document.removeEventListener('click', onClickInternalOutside, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
}
