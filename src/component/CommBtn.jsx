import React, { useState } from 'react';

const Categories = [
  '전체', '자유 주제','진로 고민', 'QnA'
];

const CommBtn = ({ selectedCategory, onSelectCategory }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div>
      {Categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={selectedCategory === category ? 'selected' : ''}
          style={{
            backgroundColor: hoveredCategory === category ? '#8B8DB9' : 'white',
            color: hoveredCategory === category ? 'white' : 'black',
            border: '1px solid #8B8DB9',
            borderRadius: '25px',
            fontFamily: 'NanumSquareNeo-Variable',
            padding: '10px 20px',
            margin: '5px',
            cursor: 'pointer',
          }}
          onMouseOver={() => setHoveredCategory(category)}
          onMouseOut={() => setHoveredCategory(null)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CommBtn;
