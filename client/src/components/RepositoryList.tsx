import React from 'react';
import RepositoryCard from './RepositoryCard';

function RepositoryList(props: {data: any}) {
  
  const { data } = props

  return (
    <div className="github-search-results-wrapper">
        {
            data && data.items && data.items.map((repo: any, i: any) => {
                return (
                    <RepositoryCard repo={repo} key={i} />
                )
            })
        }
    </div>
  );
}

export default RepositoryList;
