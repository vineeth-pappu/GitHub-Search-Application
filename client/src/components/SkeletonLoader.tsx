import React from 'react';

function SkeletonLoader(props: {className?: string}) {
  
  return (
    <div className={`skeleton-box ${props.className}`}></div>
  );
}

export default SkeletonLoader;
