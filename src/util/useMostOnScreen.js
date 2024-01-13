import { useState, useEffect } from "react";

export function useMostOnScreen(refs, rootMargin = "0px") {
  const [mostShown, setMostShown] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let intersectMap = new Map();
        entries.forEach((entry) => {
          intersectMap.set(entry.target, entry.intersectionRatio);
        });
        let most = 0;
        let mostEl;
        for (let [key, value] of intersectMap) {
          if (value >= most) {
            most = value;
            mostEl = key;
          }
        }
        setMostShown(mostEl);
      },
      {
        rootMargin,
        threshold: [0, 0.5, 1],
      }
    );

    refs.forEach(({ current }) => {
      if (current) observer.observe(current);
    });

    return () => observer.disconnect();
  }, [refs, rootMargin]);

  return mostShown;
}
