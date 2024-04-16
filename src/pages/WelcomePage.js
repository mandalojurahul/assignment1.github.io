import React, { useState } from 'react';
import '../styles/WelcomePage.css';
import { Navigate,useNavigate } from 'react-router-dom';

function WelcomePage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [location, setLocation] = useState('');

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const navigate=useNavigate();

  const handleNextClick = () => {
    // Handle form submission here
    console.log(`Avatar: ${selectedImage ? selectedImage.name : 'None'}`);
    console.log(`Location: ${location}`);
  };

  return (
    <div className="welcome-page">
      <h2>Welcome! Let's create your profile</h2>
      <p>
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms
        of Service apply
      </p>
      <div className="welcome-page__profile-pic">
        <input type="file" onChange={handleImageChange} />
        {selectedImage && (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Profile"
          />
        )}
        {!selectedImage && <p>Choose an image</p>}
      </div>
      <div className="welcome-page__location">
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" value={location} onChange={handleLocationChange} />
      </div>
      <button onClick={()=>navigate('dribbble')}>Next</button>
      <p>
        Already have a Dribbble account? <a href="#">Sign in</a>
      </p>
    </div>
  );
}

export default WelcomePage;
