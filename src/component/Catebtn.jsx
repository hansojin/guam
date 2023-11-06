import React, { useState } from 'react';

const Categories = [
  '전체',
  '서버',
  '백엔드',
  '프론트엔드',
  'Android',
  'iOS',
  'AI',
  'DBA',
  '네트워크',
  '데브옵스',
  '보안',
  '미들웨어',
  'IoT',
  '블록체인',
  '그래픽스',
  '기타',
];

const Catebtn = ({ selectedCategory, onSelectCategory }) => {
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

export default Catebtn;
