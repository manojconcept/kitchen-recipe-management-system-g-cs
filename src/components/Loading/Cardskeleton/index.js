import React from 'react';
import "./style.css";

const SkeletonCard = () => {
    return (
        <div className="container loading-skeleton">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="skeleton-image"></div>
                        <div className="card-body">
                            <div className="skeleton-title"></div>
                            <div className="skeleton-text"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Skeleton = ({ numCards }) => {
    const skeletons = [];
    for (let i = 0; i < numCards; i++) {
        skeletons.push(<SkeletonCard key={i} />);
    }
    return (
        <div className="cards__frame">
            {skeletons}
        </div>
    );
}

export default Skeleton;
