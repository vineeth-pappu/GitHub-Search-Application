import React from 'react';
import RepositoryCard from './RepositoryCard';
import ErrorMessage from './ErrorMessage';
import NoData from './NoData';

function RepositoryList(props: { data: any }) {

  const { data } = props

  if (!data?.items?.length) return <NoData message={`No repositories found`} />

  return (
    <div className="github-search-results-wrapper">
      {
        data?.items.map((repo: any, i: any) => {
          return (
            <RepositoryCard repo={repo} key={i} />
          )
        })
      }
    </div>
  );
}

export default RepositoryList;
