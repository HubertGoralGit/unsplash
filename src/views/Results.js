import React from 'react';

const Results = ({location}) => {
  return (
    <div>
      <h1>{location.state.name}</h1>
      <div>
        {location.state.data.map((item, i) => {
          return (
            <img src={item.urls.small}/>
          )
        })}
      </div>
    </div>
  );
};

export default Results;
