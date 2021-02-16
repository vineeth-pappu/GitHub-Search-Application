import React from 'react';
import userGroup from '../assets/user-group.svg';
import folder from '../assets/folder.svg';
import follower from '../assets/follower.svg';
import { useNumberFormat } from '../hooks/useNumberFormat';

function UserCard(props: {user: any}) {
  
  const { user } = props

  const format = useNumberFormat()

  return (
    <div className="card user-card">
        <div className="card-header user-card-header">
            <div className="user-profile-img">
                <img src={user.avatar_url} alt="profile"/>
            </div>
            <div className="card-title">
                <div className="user-name">
                    <a href={user.html_url} target="_blank" rel="noreferrer">{ user.name }</a>
                </div>
                <div className="user-nickname">{ user.login }</div>
                <div className="card-subtitle">
                    { user.location || 'Nowhere' }
                </div>
                <div className="card-subtitle">
                    { user.company || 'Not Occupied' }
                    {/* Since { new Date(user.created_at).toDateString() } */}
                </div>
            </div>
        </div>
        <div className="card-body user-card-body">
            <div className="user-bio" title={user.bio}>
                { user.bio }
            </div>
        </div>
        <div className="user-meta-data">
            <div className="card-title">
                { user.email && (
                    <div className="card-subtitle">
                        Email: <a href={`mailto:${user.email}`}> { user.email } </a>
                    </div> )
                }
                { user.blog && (
                    <div className="card-subtitle">
                        Website: <a href={user.blog} target="_blank"  rel="noreferrer"> { user.blog } </a>
                    </div> )
                }
                { user.twitter_username && (
                    <div className="card-subtitle">
                        Twitter: <a href={`https://twitter.com/${user.twitter_username}`} target="_blank"  rel="noreferrer"> { user.twitter_username } </a>
                    </div> )
                }
                <br />
                <div className="card-subtitle">
                    Since { new Date(user.created_at).toDateString() }
                </div>
            </div>
        </div>
        <div className="card-footer user-card-footer">
            <div className="footer-item" title="followers">
                <div className="footer-item-icon">
                    <img src={userGroup} alt="followers"/>
                </div>
                <div className="footer-item-text">
                    { format(user.followers) }
                    <span className="caption">followers</span>
                </div>
            </div>
            <div className="footer-item" title="following">
                <div className="footer-item-icon">
                    <img src={follower} alt="following"/>
                </div>
                <div className="footer-item-text">
                    { format(user.following) }
                    <span className="caption">following</span>
                </div>
            </div>
            <div className="footer-item" title="repositories">
                <div className="footer-item-icon">
                    <img src={folder} alt="repositories"/>
                </div>
                <div className="footer-item-text">
                    { format(user.public_repos) }
                    <span className="caption">repos</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default UserCard;
