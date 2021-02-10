import React from 'react';
import star from '../assets/star.svg';
import parallel from '../assets/parallel.svg';
// import eye from '../assets/eye.svg';
import scale from '../assets/scale.svg';

function RepositoryCard(props: {repo: any}) {
  
  const { repo } = props

  return (
    <div className="repo-card">
        <div className="repo-card-header">
            <div className="card-title repo-name">
                <a href={repo.html_url} target="_blank">{ repo.full_name }</a>
            </div>
            <div className="card-subtitle">
                Updated on { new Date(repo.updated_at).toDateString() }
            </div>
        </div>
        <div className="repo-card-body">
            <div className="repo-desc" title={repo.description}>
                { repo.description }
            </div>
        </div>
        <div className="repo-card-footer">
            <div className="footer-item">
                <div className="footer-item-icon">
                    <img src={star} alt="stars"/>
                </div>
                <div className="footer-item-text">
                    { repo.stargazers_count }
                </div>
            </div>
            {/* <div className="footer-item">
                <div className="footer-item-icon">
                    <img src={eye} alt="watches"/>
                </div>
                <div className="footer-item-text">
                    { repo.watchers_count }
                </div>
            </div> */}
            <div className="footer-item">
                <div className="footer-item-icon">
                    <img src={parallel} alt="forks"/>
                </div>
                <div className="footer-item-text">
                    { repo.forks_count }
                </div>
            </div>
            <div className="footer-item">
                <div className="footer-item-icon">
                    <img src={scale} alt="license"/>
                </div>
                <div className="footer-item-text">
                    { repo.license?.spdx_id || 'Unlicense' }
                </div>
            </div>
        </div>
    </div>
  );
}

export default RepositoryCard;
