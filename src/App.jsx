import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importing Routes and Route for defining routes
// Importing Components for different routes
// Routes can be defined here or in a separate file and imported
// Routes help in navigating between different components/pages without reloading the page

import './App.css';
//import img1 from '../src/images/Laptop02.jfif';
import Home  from '../src/Components/Fundamentals/Home.jsx';
import img1 from '../src/assets/images/Laptop02.jfif';

import Gallery from '../src/Components/Miscellaneous/Gallery.jsx'
import UseEffectExample from './Components/Hooks/UseEffectExample.jsx';
import LifeCycleClass from './Components/LifeCycle/LifeCycleClass.jsx';
import LifeCycleDemo from './Components/LifeCycle/LifeCycleDemo.jsx';
import RenderProps from './Components/Miscellaneous/RenderProps.jsx';
import Callback from './Components/Hooks/Callback.jsx';
import Sort from './Components/Miscellaneous/Sort.jsx';
import RenderPropsMainDemo from './Components/Miscellaneous/RenderPropsMainDemo.jsx';
import RenderPropsClassMain from './Components/Miscellaneous/RenderPropsClassMain.jsx';
import LifeCycleFunction from './Components/LifeCycle/LifeCycleFunction.jsx';

//import Nav from '../src/Components/Navbar.jsx';

function App() {
  let a = 500;
  let b = 30;
    return (
    <div>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lifecycleclass" element={<LifeCycleClass />} />
         <Route path="/lifecyclefunction" element={<LifeCycleFunction />} />
        <Route path="/lifecycledemo" element={<LifeCycleDemo />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/useeffect" element={<UseEffectExample />} />
        <Route path="/renderprops" element={<RenderProps />} />
        <Route path="/callback" element={<Callback />} />
        <Route path="/sort" element={<Sort />} />
        <Route path="/renderpropsmain" element={<RenderPropsMainDemo />} />
        <Route path="/renderpropsclass" element={<RenderPropsClassMain />} />
        
       


        <Route path="/sample" element={<><h4>Sample page</h4><h5>Example Page</h5></>} /> 
        {/* <Route path="/navbar" element={<Nav />} />   */}
      </Routes>
        {a*10 + b*20 }
        {a>1000 ? "A is large" : "A is small"}
        {a>100  && <h4>Both conditions are true</h4>}
    </div>
    );
  

      {/* Basic Conceptsin ReactJS */}
      {/* <div className="Container">
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
            <table border="1" cellPadding="5" style={{ color: 'black', backgroundColor: 'white' }}> */}
              {/* Remove the style in <table> and check inspect in Browser to see the default styling */}
              {/* <thead>
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

    ); */}

}

export default App;
