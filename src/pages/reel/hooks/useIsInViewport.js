import { useEffect, useState, useMemo } from "react";

let audios = [];

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) {
          audios.forEach((audio) => {
            if (audio !== ref.current) {
              audio.pause();
            } else {
              audio.play();
            }
          });
        }
      }),
    []
  );

  useEffect(() => {
    audios.push(ref.current);
    observer.observe(ref.current);

    return () => {
      audios = audios.filter((audio) => audio !== ref.current);
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

export default useIsInViewport;
