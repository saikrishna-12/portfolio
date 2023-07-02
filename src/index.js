import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

// Add meta tags dynamically
const metaTags = [
  { name: 'My Home Page', content: 'Sai Krishna Darishetti - my portfolio page' },
  { name: 'Sai Krishna darishetti', content: 'Sai Krishna Darishetti, your keywords, relevant to your content' },
  { property: 'og:title', content: 'My Portfolio' },
  { property: 'og:description', content: 'Discover the exceptional work of Sai Krishna Darishetti, a skilled web developer specializing in front-end technologies. Explore a collection of impressive projects showcasing expertise in creating user-friendly interfaces and seamless user experiences. Ready to collaborate or discuss your next project? Visit my portfolio and let\'s connect!' }
  
  // Add more meta tags as needed
];

metaTags.forEach(tag => {
  const metaTag = document.createElement('meta');
  Object.entries(tag).forEach(([key, value]) => {
    metaTag.setAttribute(key, value);
  });
  document.head.appendChild(metaTag);
});

reportWebVitals();
