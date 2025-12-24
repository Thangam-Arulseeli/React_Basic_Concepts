
import logo from './logo.svg';
import './App.css';
//import img1 from '../src/images/Laptop02.jfif';
import Home  from './Components/Fundamentals/Home';
import img1 from '../src/assets/images/Laptop02.jfif';

import React from 'react';
//import { Routes, Route } from 'react-router-dom'; // Importing Routes and Route for defining routes
// Importing Components for different routes
// Routes can be defined here or in a separate file and imported
// Routes help in navigating between different components/pages without reloading the page

function App() {
    return (
    <div className="App">
      {/* <Routes>
          <Route path="/" element={<div><h2>Home Page</h2><p>Welcome to the home page!</p></div>} /> 
            <Route path="/" element={<Home />} />  Default route
            <img src={img1} alt="Laptop" width="100px"/>
               Define more routes as needed 
            <Route path="/about" element={<div><h2>About Page</h2><p>This is the about page.</p></div>} />
            <Route path="/contact" element={<div><h2>Contact Page</h2><p>This is the contact page.</p></div>} />
            
      </Routes> */}
   
      {/* Basic Conceptsin ReactJS */}
      <div className="Container">
        <h4>Welcome to React Training!</h4>
        <img src={img1} alt="Laptop" width="100px"/>
        <p>In this training, you will learn the following concepts:</p>
        <>
          <ul>
            <li>Learn Components</li>
            <li>Learn Props</li>
            <li>Learn State</li>
            <li>Learn Lifecycle Methods</li>
            <li>Build a React App</li>
          </ul>
      </> 
      <hr/>
      <Home />
      <hr/>
      <React.Fragment>
            <p>In this training, you will learn the following concepts:</p>
            <table border="1" cellPadding="5" style={{ color: 'black', backgroundColor: 'white' }}>
              {/* Remove the style in <table> and check inspect in Browser to see the default styling */}
              <thead>
                <tr>
                  <th>Concept</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Components</td>
                  <td>Building blocks of a React application.</td>
                </tr>
                <tr>
                  <td>Props</td>
                  <td>Passing data to components.</td>
                </tr>
                <tr>
                  <td>State</td>
                  <td>Managing dynamic data within components.</td>
                </tr>
                <tr>
                  <td>Lifecycle Methods</td>
                  <td>Handling component lifecycle events.</td>
                </tr>
                <tr>
                  <td>Building a React App</td>
                  <td>Putting it all together to create a functional app.</td>
                </tr>
              </tbody>
            </table>  
          </React.Fragment>
      </div>


    </div>     
    );

  
}

export default App;
