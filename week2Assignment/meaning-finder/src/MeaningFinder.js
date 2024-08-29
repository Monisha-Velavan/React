import React, { useState } from 'react';

function MeaningFinder() {
  const [name, setName] = useState('');

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    fetch(`https://api.agify.io/?name=${name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <h1>Meaning Finder</h1>
      <input
        type="text"
        value={name}
        onChange={handleInputChange}
        placeholder="Enter a name"
      />
      <button onClick={handleButtonClick}>Find Meaning</button>
    </div>
  );
}

export default MeaningFinder;
