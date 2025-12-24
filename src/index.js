import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import { BrowserRouter } from 'react-router-dom'; // Importing BrowserRouter for routing

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // <BrowserRouter> 
  //   <App />
  // </BrowserRouter>

  <App />
);

/* 
const root = ReactDOM.createRoot(document.getElementById('root'));
Creates a React root using React 18’s new rendering API.

** This tells React:
    “This is where the React app will be rendered.”

** Finds the HTML element with id root (usually in index.html)
    <div id="root"></div>

createRoot enables React 18 features like:
  ** Concurrent rendering
  ** Automatic batching
--------------------------------
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

Renders (displays) React components inside the root DOM element.
  ** React.StrictMode is a tool for highlighting potential problems in an application.
     It activates additional checks and warnings for its descendants.
  ** <App /> is the main component of the application.
     It serves as the root component that contains all other components and logic of the app.
 
 
  Overall, this code initializes and renders a React application,
  setting up the root element and wrapping the main App component in StrictMode for better development practices. 

A development-only wrapper that:

  ** Detects unsafe lifecycle methods
  ** Warns about deprecated APIs
  ** Helps identify side effects
  ** Does not affect production builds
*/

reportWebVitals();
