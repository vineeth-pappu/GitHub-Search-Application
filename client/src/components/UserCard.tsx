import React from 'react';
import star from '../assets/star.svg';
import parallel from '../assets/parallel.svg';
// import eye from '../assets/eye.svg';
import scale from '../assets/scale.svg';

function UserCard(props: {user: any}) {
  
  const { user } = props

  return (
    <div className="repo-card">
        <div className="repo-card-header">
            <div className="user-profile-img">
                <img src={user.avatar_url} alt="profile"/>
            </div>
            <div className="card-title repo-name">
                <a href={user.html_url} target="_blank">{ user.login }</a>
            </div>
        </div>
        <div className="repo-card-body">
            <div className="repo-desc" title={user.description}>
                { user.description }
            </div>
        </div>
        <div className="repo-card-footer">
            <div className="footer-item">
                <div className="footer-item-icon">
                    <img src={star} alt="stars"/>
                </div>
                <div className="footer-item-text">
                    { user.stargazers_count }
                </div>
            </div>
            <div className="footer-item">
                <div className="footer-item-icon">
                    <img src={parallel} alt="forks"/>
                </div>
                <div className="footer-item-text">
                    { user.forks_count }
                </div>
            </div>
            <div className="footer-item">
                <div className="footer-item-icon">
                    <img src={scale} alt="license"/>
                </div>
                <div className="footer-item-text">
                    { user.license?.spdx_id || 'Unlicense' }
                </div>
            </div>
        </div>
    </div>
  );
}

export default UserCard;
