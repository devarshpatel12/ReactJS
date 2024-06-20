import React from 'react';

const Shimmer = () => {
    return (
        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(10)].map((_, index) => (
                <div key={index} className="rounded-lg bg-gray-500 animate-pulse"></div>
            ))}
        </div>
    );
};

export default Shimmer;
