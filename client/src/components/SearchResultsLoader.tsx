import React from 'react';
import SkeletonLoader from './SkeletonLoader';

function SearchResultsLoader() {
  
  return (
    <div className="search-results-skeleton-loader-wrapper">
        {
            Array(6).fill(null).map((_, i) => <SkeletonLoader key={i} className="search-result-skeleton" />)
        }
    </div>
  );
}

export default SearchResultsLoader;
