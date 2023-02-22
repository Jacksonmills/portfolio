import React from 'react';

function useIsOnScreen() {
  const [isOnScreen, setIsOnScreen] = React.useState(false);

  const elementRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsOnScreen(entry.isIntersecting);
    });

    if (!elementRef.current) return;
    observer.observe(elementRef.current);

    () => observer.disconnect();
  }, []);

  return { isOnScreen, elementRef };
}

export default useIsOnScreen;