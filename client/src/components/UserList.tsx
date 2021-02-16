import React from 'react';
import UserCard from './UserCard';
import NoData from './NoData';

function UserList(props: { data: any }) {

  const { data } = props

  if (!data?.items?.length) return <NoData message={`No users found`} />

  return (
    <div className="github-search-results-wrapper">
      {
        data?.items?.map((user: any, i: number) => {
          return (
            <UserCard user={user} key={i} />
          )
        })
      }
    </div>
  );
}

export default UserList;
