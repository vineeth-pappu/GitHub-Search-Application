import React from 'react';
import star from '../assets/star.svg';
import parallel from '../assets/parallel.svg';
// import eye from '../assets/eye.svg';
import scale from '../assets/scale.svg';
import { useNumberFormat } from '../hooks/useNumberFormat';

function RepositoryCard(props: {repo: any}) {
  
  const { repo } = props
  const format = useNumberFormat()

  return (
    <div className="card repo-card">
        <div className="card-header repo-card-header">
            <div className="card-title repo-name">
                <a href={repo.html_url} target="_blank" rel="noreferrer">{ repo.full_name }</a>
            </div>
            <div className="card-subtitle">
                Updated on { new Date(repo.updated_at).toDateString() }
            </div>
        </div>
        <div className="card-body repo-card-body">
            <div className="repo-desc" title={repo.description}>
                { repo.description }
            </div>
        </div>
        <div className="card-footer repo-card-footer">
            <div className="footer-item">
                <div className="footer-item-icon">
                    <img src={star} alt="stars"/>
                </div>
                <div className="footer-item-text">
                    { format(repo.stargazers_count) }
                </div>
            </div>
            {/* <div className="footer-item">
                <div className="footer-item-icon">
                    <img src={eye} alt="watches"/>
                </div>
                <div className="footer-item-text">
                    { format(repo.watchers_count) }
                </div>
            </div> */}
            <div className="footer-item">
                <div className="footer-item-icon">
                    <img src={parallel} alt="forks"/>
                </div>
                <div className="footer-item-text">
                    { format(repo.forks_count) }
                    <span className="caption">forks</span>
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
