import React from 'react';
import UserCard from './UserCard';

function UserList(props: {data: any}) {
  
  const { data } = props

  return (
    <div className="github-search-results-wrapper">
        {
            data && data.items && data.items.map((user: any, i: any) => {
                return (
                    <UserCard user={user} key={i} />
                )
            })
        }
    </div>
  );
}

export default UserList;
