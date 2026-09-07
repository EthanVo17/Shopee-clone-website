import React from 'react';

const CategoryHeader: React.FC = () => {
    return (
        <div
            className="flex items-center h-[60px] pl-[20px]"
            style={{ borderBottom: '1px solid #f5f5f5' }}
        >
            <h2
                className="font-bold uppercase ml-[40px]"
                style={{
                    fontSize: '18px',
                    color: '#ee4d2d',
                    letterSpacing: '0.05em',
                }}
            >
                CATEGORIES
            </h2>
        </div>
    );
};
export default CategoryHeader;
