import React, { useState } from 'react';
import '../styles/DribbblePage.css';
import { Navigate,useNavigate } from 'react-router-dom';

function DribbblePage() {
  const [selectedOption, setSelectedOption] = useState('');
  const navigate=useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleReturn = () => {
    // Implement the functionality to handle the return action here
    console.log('Returning to previous page');
  };

  return (
    <div className="dribbble-page">
      <h2>What brings you to Dribbble?</h2>
      <p>
        Select the option that best describes you. Don't worry, you can explore other
        options later.
      </p>
      <div className="dribbble-page__options">
        <div className="dribbble-page__option">
          <input
            type="radio"
            id="option-ai"
            name="option"
            value="Ai"
            checked={selectedOption === 'Ai'}
            onChange={handleOptionChange}
          />
          <label htmlFor="option-ai">
            <img src="https://via.placeholder.com/100x100.png?text=Designer" alt="Designer" />
            <span>I'm a designer looking to share my work</span>
          </label>
        </div>
        <div className="dribbble-page__option">
          <input
            type="radio"
            id="option-hire"
            name="option"
            value="I'm looking to hire a designer"
            checked={selectedOption === "I'm looking to hire a designer"}
            onChange={handleOptionChange}
          />
          <label htmlFor="option-hire">
            <img src="https://via.placeholder.com/100x100.png?text=Hiring" alt="Hiring" />
            <span>I'm looking to hire a designer</span>
          </label>
        </div>
        <div className="dribbble-page__option">
          <input
            type="radio"
            id="option-finish"
            name="option"
            value="Finish"
            checked={selectedOption === 'Finish'}
            onChange={handleOptionChange}
          />
          <label htmlFor="option-finish">
            <img src="https://via.placeholder.com/100x100.png?text=Inspiration" alt="Inspiration" />
            <span>I'm looking for design inspiration</span>
          </label>
        </div>
      </div>
      <button>Finish</button>
      <br/>
      <br/>
      <a href="#" onClick={()=>navigate(-1)}>Return</a>
    </div>
  );
}

export default DribbblePage;
