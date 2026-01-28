import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

function AnimatedCounter({ end, label, suffix = '' }) {
  const { count, elementRef } = useCountUp(end, 2000);

  return (
    <div className="stat-card" ref={elementRef}>
      <div className="stat-number">
        {count}
        <span className="stat-suffix">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default AnimatedCounter;
