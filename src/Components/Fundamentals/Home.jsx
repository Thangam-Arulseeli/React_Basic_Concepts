import React from "react";
import '../../Style/Home.css';    
import img1 from '../../../src/assets/images/workplace_img1.jpg';

import  MyHome1 , {Home2, Home3 } from "./Home1";
import MyClassHome, {ClassHome2, ClassHome3} from "./HomeClass";

import StateClass, {StateClass1} from "../Fundamentals/StateMgt/StateClass";
import StateFunctional, {StateFunctional1} from "../Fundamentals/StateMgt/StateFunctional"; 
import StateClassFunctional from "../Fundamentals/StateMgt/StateClassFunctional";

import ClassCompProps from "../Fundamentals/Props/ClassCompProps"; 
import FunctionalCompProp from "./Props/FunctionalCompProps";  
import FunctionalCompParam from "../Fundamentals/Props/FunctionalCompParam";

import ClassComp from "../Fundamentals/Additionals/FragmentsClassComp"; 
import Destructuring from "../Fundamentals/Additionals/Destructuring";
import FragmentsClassComp from '../Fundamentals/Additionals/FragmentsClassComp';
import FunctionalCompFragments from "../Fundamentals/Additionals/FragmentsFunctionalComp";
import InlineStyles from '../../Components/Fundamentals/Additionals/InlineStyles';
import SpreadOpFragments from "../Fundamentals/Additionals/SpreadOpFragments";
import BootstrapExample from '../Fundamentals/Additionals/BootstrapExample';
import FragmentWithKey, {FragmentWithKeyInTable} from "../Fundamentals/Additionals/FragmentWithKey";

function Home() { 
    return (
        <div className="Home">
            {/* <h2 className="heading"> Home Component</h2>
            <p>This is the Home component of the React application.</p>
             <img src={img1} alt="Laptop" width="100px"/>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <hr/>   
            <MyHome1 />
            <Home2 /> 
            <Home3 /> 
            <hr />
            <MyClassHome />
            <ClassHome2 />
            <ClassHome3 />   
            <hr></hr> */}

            {/* State Components */}
           {/*  <h4>State Components - Using class component</h4>
            <StateClass />
            <StateClass1 />
         
            <hr />
            <h4>State Components - Using functional component</h4>
            <StateFunctional />
            <StateFunctional1 />
            <hr></hr> 
            <StateClassFunctional />  
            <hr />
            <ClassComp />
            <hr></hr> */}


            {/* Class Components and Functional with Fragments */}
            <h4>Class & Functional Components with Fragments</h4>
            {/* <FragmentsClassComp />
            <hr />
             <FunctionalCompFragments />
             <FragmentWithKey />
             <hr></hr>
             <FragmentWithKeyInTable />
             <hr></hr>  
             <InlineStyles />
            <hr></hr> */}

            {/* Class Components and Functional with Props */}
            {/* <ClassCompProps name="Aditya" place="India"></ClassCompProps>
            <hr></hr>
            <FunctionalCompProp name="Arul Seeli" place="USA"></FunctionalCompProp>
            <hr></hr>
             <FunctionalCompParam name="Moses" country="Australia" /> */}

            {/* Destructuring Examples*/}
            {/* <Destructuring/>
            <hr></hr>
            <SpreadOpFragments />
            <BootstrapExample />   */}

            {/* Life Cycle Components */}
            <h4>Life Cycle Components - Using Class Component</h4>
            <MyClassHome />
            <hr></hr>
            <StateClass />  
            <hr></hr>
            {/* <LifeCycleClass></LifeCycleClass> */}
            {/* <LifeCycleDemo></LifeCycleDemo> */}
            
            {/* <ClassComp1></ClassComp1>
        
        <FunctionalComp1></FunctionalComp1>
        <FunctionalCompProp1 name="Arul seeli" place="California"></FunctionalCompProp1>
        <ClassCompProps1 name="Daniel" place="Canada"></ClassCompProps1>
        </div> */}
        {/* <FunctionalCompParam name="Moses" country="Australia" />
       <BootstrapExample></BootstrapExample>  */}
        {/* <ClassLifeCycle></ClassLifeCycle> */}
        {/* <SpreadOpFragments></SpreadOpFragments> */}


        </div>
    );
}

export default Home;
