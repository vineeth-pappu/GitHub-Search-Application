import React from 'react';
import star from '../assets/star.svg';
import parallel from '../assets/parallel.svg';
// import eye from '../assets/eye.svg';
import scale from '../assets/scale.svg';

function UserCard(props: {user: any}) {
  
  const { user } = props

  return (
    <div className="card user-card">
        <div className="card-header user-card-header">
            <div className="user-profile-img">
                <img src={user.avatar_url} alt="profile"/>
            </div>
            <div className="card-title">
                <div className="user-name">
                    <a href={user.html_url} target="_blank">{ user.name }</a>
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
                        Website: <a href={user.blog} target="_blank"> { user.blog } </a>
                    </div> )
                }
                { user.twitter_username && (
                    <div className="card-subtitle">
                        Twitter: <a href={`https://twitter.com/${user.twitter_username}`} target="_blank"> { user.twitter_username } </a>
                    </div> )
                }
                <br />
                <div className="card-subtitle">
                    Since { new Date(user.created_at).toDateString() }
                </div>
            </div>
        </div>
        <div className="card-footer user-card-footer">
            <div className="footer-item">
                <div className="footer-item-icon">
                    <img src={star} alt="stars"/>
                </div>
                <div className="footer-item-text">
                    { user.followers }
                </div>
            </div>
            <div className="footer-item">
                <div className="footer-item-icon">
                    <img src={parallel} alt="forks"/>
                </div>
                <div className="footer-item-text">
                    { user.following }
                </div>
            </div>
            <div className="footer-item">
                <div className="footer-item-icon">
                    <img src={scale} alt="license"/>
                </div>
                <div className="footer-item-text">
                    { user.public_repos }
                </div>
            </div>
        </div>
    </div>
  );
}

export default UserCard;
