import React, { useState } from 'react';

const LoremGenerator = () => {
  // State to manage the number of paragraphs
  const [numParagraphs, setNumParagraphs] = useState(1);

  // Function to handle changes in the number of paragraphs input
  const handleInputChange = (event) => {
    setNumParagraphs(event.target.value);
  };

  // Function to generate Lorem Ipsum text
  const generateLorem = () => {
    // Fetch your JSON data or use predefined data
    const loremData = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      // Add more Lorem Ipsum paragraphs as needed
    ];

    // Generate Lorem Ipsum text based on the number of paragraphs selected
    const loremText = Array.from({ length: numParagraphs }, () => loremData[Math.floor(Math.random() * loremData.length)]);

    // Join paragraphs into a single string separated by line breaks
    return loremText.join('\n');
  };

  return (
    <div>
      <h1>Lorem Generator</h1>
      <label htmlFor="numParagraphs">Number of Paragraphs:</label>
      <input
        type="number"
        id="numParagraphs"
        value={numParagraphs}
        onChange={handleInputChange}
      />
      <button onClick={generateLorem}>Generate Lorem</button>
      <div>
        {/* Display generated Lorem Ipsum text */}
        <textarea rows={10} cols={50} readOnly value={generateLorem()} />
      </div>
    </div>
  );
};

export default LoremGenerator;
