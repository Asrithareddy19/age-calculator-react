import React, { useState } from 'react';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDateObj = new Date(birthDate);
    const today = new Date();
    const ageDiff = today - birthDateObj;
    const ageDate = new Date(ageDiff);

    setAge(Math.abs(ageDate.getUTCFullYear() - 1970));
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <label>Enter your birthdate:</label>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <p>Your age is: {age} years</p>}
    </div>
  );
}

export default AgeCalculator;

