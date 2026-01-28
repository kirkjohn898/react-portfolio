import { useState, useEffect, useRef } from 'react';

export const useCountUp = (end, duration = 2000, startOnView = true) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current && startOnView) {
          hasStarted.current = true;
          
          const endNumber = parseInt(end);
          const increment = endNumber / (duration / 16);
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= endNumber) {
              setCount(endNumber);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [end, duration, startOnView]);

  return { count, elementRef };
};
