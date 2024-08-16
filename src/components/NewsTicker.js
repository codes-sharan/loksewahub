import React from 'react';
import './NewsTicker.css'; // Import the CSS file

const NewsTicker = () => {
  const headlines = [
    { text: 'This website is currently under construction!', url: 'https://psc.gov.np' },
    { text: 'Feel free to send any suggestions/feedback at helloloksewahub@gmail.com.', url: 'https://psc.gov.np' },
    { text: 'Continue visiting loksewahub.com for loksewa related informations!', url: './Officer'},
    // Add more headlines with URLs as needed
  ];

  return (
    <div className="news-ticker">
      <div className="news-ticker-content">
        {headlines.map((headline, index) => (
          <a key={index} href={headline.url} className="news-ticker-item" target="_blank" rel="noopener noreferrer">
            {headline.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
