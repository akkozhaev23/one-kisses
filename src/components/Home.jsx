import React, { useState } from 'react';

const Home = () => {
  const [flags, setFlags] = useState('');

  const handleClick = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const json = await response.json();
    setFlags(json);
  };

  return (
    <div>
      {flags ? (
        flags.map((e) => (
          <div>
            <img
              style={{ border: '1px solid black', margin: '5px' }}
              key={e.flags.png}
              src={e.flags.png}
            />
            <span>{e.fifa}</span>
          </div>
        ))
      ) : (
        <button onClick={handleClick}>Получить флаги</button>
      )}
    </div>
  );
};

export default Home;
