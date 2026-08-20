import React from 'react';
//import { Routes, Route } from 'react-router-dom'; // Importing Routes and Route for defining routes
// Importing Components for different routes
// Routes can be defined here or in a separate file and imported
// Routes help in navigating between different components/pages without reloading the page

import './App.css';
//import img1 from '../src/images/Laptop02.jfif';
//import Home  from '../src/Components/Fundamentals/Home.jsx';
//import img1 from '../src/assets/images/Laptop02.jfif';

// Fundamentals
import ClassCompProps from './Components/Fundamentals/Props/ClassCompProps.jsx';
//import ClassComp from './Components/Fundamentals/Additionals/FragmentsClassComp.jsx';
import FunctionalCompProp from './Components/Fundamentals/Props/FunctionalCompProps.jsx';
import FunctionalCompParam from './Components/Fundamentals/Props/FunctionalCompParam.jsx';

//State Management
import StateClass from './Components/Fundamentals/StateMgt/StateClass.jsx';
import StateFunctional from './Components/Fundamentals/StateMgt/StateFunctional.jsx'; 
 import StateClassFunctional from './Components/Fundamentals/StateMgt/StateClassFunctional.jsx';
import MultipleStateUpdate from './Components/Fundamentals/StateMgt/MultipleStateUpdate.jsx';

// Miscellaneous
 import Profile from './Components/Miscellaneous/Props.jsx';
 import CardProfile from './Components/Miscellaneous/PropCards.jsx';
import Gallery from './Components/Miscellaneous/Gallery.jsx';
import RenderProps from './Components/Miscellaneous/RenderProps.jsx';
import RenderPropsMainDemo from './Components/Miscellaneous/RenderPropsMainDemo.jsx';
import RenderPropsClassMain from './Components/Miscellaneous/RenderPropsClassMain.jsx';
import Sort from './Components/Miscellaneous/Sort.jsx'; // Sort component for sorting functionality uses Events and Props Drilling concepts
import Theme from './Components/Miscellaneous/Theme.jsx';

 // Hooks
//  import CounterComponent from './Components/Hooks/CounterComponent.jsx';
 import UseEffectExample from './Components/Hooks/UseEffectExample.jsx';
 import UseMemoExample from './Components/Hooks/UseMemoExample.jsx';
 import UseRefExamples from './Components/Hooks/useRefExamples.jsx';
 import Callback from './Components/Hooks/Callback.jsx';
 import ReactHook from './Components/Hooks/ReactHooks.jsx';

 // LifeCycle
import LifeCycleClass from './Components/LifeCycle/LifeCycleClass.jsx';
import LifeCycleFunction from './Components/LifeCycle/LifeCycleFunction.jsx';
import LifeCycleDemo from './Components/LifeCycle/LifeCycleDemo.jsx';


// HOC - Higher Order Components
import HOCTodo from './Components/HOC/HOCTodo.jsx';

// Form Handling
import BiodataFormControlled from './Components/FormHandling/BiodataFormControlled.jsx';
import BiodataFormUncontrolled from './Components/FormHandling/BiodataFormUncontrolled.jsx';
import BiodataFormRHFYepValid from './Components/FormHandling/BiodataFormRHFYepValid.jsx';
import BiodataFormFormik from './Components/FormHandling/BiodataFormFormik.jsx';
import BiodataFormRHF from './Components/FormHandling/BiodataFormRHF.jsx';
import DynamicFieldRHF from './Components/FormHandling/DynamicFieldsRHF.jsx';

// API Handling - AXIOS
import UsingFetch from './Components/DataHandling/ProductAPI.jsx';
import UserToggle from './Components/DataHandling/MapJSON.jsx';
import PersonList from './Components/DataHandling/Axios.jsx';
import AddToCart from './Components/DataHandling/CartAddTo.jsx';
import Reducer from './Components/Fundamentals/StateMgt/UsageOfReducer.jsx';
import Counter from './Components/Fundamentals/StateMgt/ReducerBasedCounter.jsx';


// PropDrilling
import ClassApp from './Components/Fundamentals/PropsDrilling/ClassBased/ClassApp.jsx';
import ClassAppProvider from './Components/Fundamentals/PropsDrilling/ClassBased/ClassAppProvider.jsx';
// import FunctionalApp from './Components/Fundamentals/PropsDrilling/FunctionalBased/FunctionalApp.jsx';

import Nav from './Components/NavBar.jsx';


function App() {
  return (
    <div className="App">
    <ul>
      {/* <a href="/">Home</a>
      <li><a href="/classprops">Class Component Props </a>  <ClassCompProps name="Seeli" place="India"/>    </li>
      <li><a href="/functionalprops">Functional Component Props</a> <FunctionalCompProp name="Harsha" place="Covai"/> </li>
      <li><a href="/functionalparam">Functional Component with Parameter</a> <FunctionalCompParam name="Harshavardhan" country="India" /></li>
      
      <li><a href="/stateclass">State Class Component</a> <StateClass /> </li>
      <li> <a href="/statefunctional">State Functional Component</a> <StateFunctional /> </li>
      <li><a href="/stateclassfunctional">State Class Functional Component</a> <StateClassFunctional /> </li> 
      <li> <a href="/multiplestatefunction">Multiple State Functional Component</a> <MultipleStateUpdate /> </li> */}
      
       {/* <li> <a href="/miscelaneousprofile">Miscellaneous Profile</a> <Profile /> </li> */}
      {/* <li> <a href="/miscelaneouspropcards">Miscellaneous Prop Cards</a> <CardProfile /> </li> */}
      {/* <li> <a href="/miscelaneousgallery">Miscellaneous Gallery</a> <Gallery /> </li> */}
      {/* <li> <a href="/miscelaneousrenderprops">Miscellaneous Render Props</a> <RenderProps /> </li> */}
      {/* <li> <a href="/miscelaneousrenderpropsmaindemo">Miscellaneous Render Props Main Demo</a> <RenderPropsMainDemo /> </li>*/}
       {/*<li> <a href="/miscelaneousrenderpropsclassmain">Miscellaneous Render Props Class Main</a> <RenderPropsClassMain /> </li> */}
        {/* <li> <a href="/miscelaneoustheme">Miscellaneous Theme</a> <Theme /> </li>
       <li> <a href="/miscelaneoussort">Miscellaneous Sort</a> <Sort /> </li>  */}

        <li> <a href="/hoc">HOC - Higher Order Component</a> <HOCTodo /> </li>
      

      {/* <li> <a href="/hooksuseeffect">Hooks UseEffect Example</a> <UseEffectExample /> </li>*/}
      {/* <li> <a href="/hooksusememo">Hooks UseMemo Example</a> <UseMemoExample /> </li> */}    
       {/* <li> <a href="/hookcounter">Hooks UseRef Example</a> <CounterComponent /> </li> */}
      {/* <li> <a href="/hooksuseref">Hooks UseRef Example</a> <UseRefExamples /> </li>   */}
      {/* <li> <a href="/hookscallback">Hooks Callback Example</a> <Callback /> </li> */}
     {/*  <li> <a href="/reacthooks">React Hooks Example</a> <ReactHook /> </li> */}
      
        
      {/* <li> <a href="/lifecycleclass">Lifecycle Class Component</a> <LifeCycleClass /> </li>
      <li> <a href="/lifecyclefunction">Lifecycle Function Component</a> <LifeCycleFunction /> </li> 
      <li> <a href="/lifecycledemo">Lifecycle Demo Component</a> <LifeCycleDemo /> </li> */}  


      {/* <li> <a href="/formcontrolled">Form Controlled Component</a> <BiodataFormControlled /> </li> */}
      {/* <li> <a href="/formuncontrolled">Form Uncontrolled Component</a> <BiodataFormUncontrolled /> </li>  */}
       {/* <li> <a href="/formformik">Form Formik Component</a> <BiodataFormFormik /> </li> */}
          {/* <li> <a href="/formrhf">Form React Hook Form Component</a> <BiodataFormRHF /> </li>
          <hr></hr>
              <li> <a href="/formrhfyepvalid">Form React Hook Form Yep Valid Component</a> <BiodataFormRHFYepValid /> </li> 
         <hr></hr>
         <li> <a href="/dynamicfieldrhf">Dynamic Fields React Hook Form Component</a> <DynamicFieldRHF /> </li>  
          
    <hr/> */}

        {/* <li> <a href="/productapi">Product API Component - Fake API </a> <UsingFetch /> </li>  */}
        {/* <li> <a href="/mapjson">Map JSON Component</a> <UserToggle /> </li>  */}
        {/* <li> <a href="/axios">Axios Component</a> <PersonList /> </li> */}
      {/* <li> <a href="/addtocart">Add to Cart Component</a> <AddToCart /> </li> */}
       {/* <li> <a href="/reducer">Reducer Component</a> <Reducer /> </li> */}


         {/* <li> <a href="/classapp">Class Based Props Drilling</a> <ClassApp /> </li>  */}
         {/* <li> <a href="/classappprovider">Class Based Context API</a> <ClassAppProvider /> </li>  */}

       {/* <li> <a href="/reducercounter">Reducer Based Counter</a> <Counter /> </li> */}
    

    {/* <a href="/navbar">Nav Bar <Nav /> </a> */}

    </ul>
    </div> )
}
export default App;

//Additional Concepts
// import Destructuring from './Components/Fundamentals/Additionals/Destructuring.jsx';
// import FragmentsClassComp from './Components/Fundamentals/Additionals/FragmentsClassComp.jsx';
// import FunctionalCompFragments from './Components/Fundamentals/Additionals/FragmentsFunctionalComp.jsx';
// import InlineStyles from './Components/Fundamentals/Additionals/InlineStyles.jsx';
// import SpreadOpFragments from './Components/Fundamentals/Additionals/SpreadOpFragments.jsx';
// import BootstrapExample from './Components/Fundamentals/Additionals/BootstrapExample.jsx';
// import FragmentWithKey, {FragmentWithKeyInTable} from './Components/Fundamentals/Additionals/FragmentWithKey.jsx'

// import Gallery from '../src/Components/Miscellaneous/Gallery.jsx'
//import Gallery from '../src/Components/Miscellaneous/Gallery.jsx'
//import UseEffectExample from './Components/Hooks/UseEffectExample.jsx';
//import LifeCycleClass from './Components/LifeCycle/LifeCycleClass.jsx';
//import LifeCycleDemo from './Components/LifeCycle/LifeCycleDemo.jsx';
//import RenderProps from './Components/Miscellaneous/RenderProps.jsx';

//import Sort from './Components/Miscellaneous/Sort.jsx';
//import RenderPropsMainDemo from './Components/Miscellaneous/RenderPropsMainDemo.jsx';
//import RenderPropsClassMain from './Components/Miscellaneous/RenderPropsClassMain.jsx';
//import LifeCycleFunction from './Components/LifeCycle/LifeCycleFunction.jsx';

// Form Manipulations
//import BiodataFormControlled from './Components/FormHandling/BiodataFormControlled.jsx';
//import BiodataFormUncontrolled from './Components/FormHandling/BiodataFormUncontrolled';
//import BiodataFormRHF from './Components/FormHandling/DynamicFieldsRHF.jsx';
//import BiodataFormRHFYepValid from './Components/FormHandling/BiodataFormRHFYepValid.jsx'
//import BiodataFormFormik from './Components/FormHandling/BiodataFormFormik.jsx'

//import Callback from './Components/Hooks/Callback.jsx'
//import ReactHook from './Components/Hooks/ReactHooks.jsx'
//import UseMemoExample from './Components/Hooks/UseMemoExample';
//import ParentCallback from './Components/Hooks/CallbackParent.jsx';

//import HOC1 from './Components/HOC/HOCProduct.jsx'
//import HOC2 from './Components/HOC/HOCUser.jsx'; 
//import HOCTodo from './Components/HOC/HOCTodo.jsx';

//import Events from './Components/Miscellaneous/Events.jsx';
//import PropCards from './Components/Miscellaneous/PropCards.jsx';
//import ProductaPI from './Components/DataHandling/ProductAPI.jsx';
//import MapJSON from './Components/DataHandling/MapJSON.jsx';

//import AddToCart from './Components/DataHandling/CartAddTo.jsx';
//import Reducer from './Components/Fundamentals/StateMgt/UsageOfReducer.jsx';

//import Nav from './Components/NavBar.jsx';





/*
export default App;

 let a = 500;
  let b = 30;
    return (  

       // <div className="App">
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/classprops" element={<ClassCompProps />} />
  //       <Route path="/functionalprops" element={<FunctionalCompProp />} />
  //       <Route path="/functionalparam" element={<FunctionalCompParam name="Harshavardhan" country="India"/>} />
  //       <Route path="/stateclass" element={<StateClass />} />
  //       <Route path="/statefunction" element={<StateFunction />} />
  //     </Routes>
  //   </div>
      */ 
    {/* <div>
       <Routes> */}
         /* <Route path="/" element={<Nav />} /> */ 
        {/* <Route path="/" element={<Home />} /> */}
 

        /*
        <Route path="/lifecycleclass" element={<LifeCycleClass />} />
         <Route path="/lifecyclefunction" element={<LifeCycleFunction />} />
        <Route path="/lifecycledemo" element={<LifeCycleDemo />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/useeffect" element={<UseEffectExample />} />
        
        <Route path="/sort" element={<Sort />} />
        <Route path="/renderpropsmain" element={<RenderPropsMainDemo />} />
        <Route path="/renderpropsclass" element={<RenderPropsClassMain />} />

        
        <Route path="/formcontrolled" element={<BiodataFormControlled/>} />
        <Route path="/formuncontrolled" element={<BiodataFormUncontrolled/>} />
        <Route path="/formrhf" element={<BiodataFormRHF/>} />
        <Route path="/formrhfyup" element={<BiodataFormRHFYepValid/>} />
        <Route path="/formformik" element={<BiodataFormFormik/> } />
        
        {/* Hook Examples */
    /*    <Route path="/callback" element={<Callback/>} />
        <Route path="/callbackparent" element={<ParentCallback />} />
        <Route path="/reacthook" element={<ReactHook/>} />
        <Route path="/usememo" element={<UseMemoExample />} /> 
        
        <Route path="/hocproduct" element={<HOC1 />} />
        <Route path="/hocuser" element={<HOC2 />} /> 
        <Route path="/hoctodo" element={<HOCTodo />} />
        <Route path="/sort" element={<Sort />} /> 

        <Route path="/events" element={<Events />} />
        <Route path="/renderprops" element={<RenderProps />} />
        <Route path="/propcards" element={<PropCards />} />
        <Route path="/productapi" element={<ProductaPI />} />
        <Route path="/mapjson" element={<MapJSON />} />

        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/reducer" element={<Reducer />} />


        <Route path="/sample" element={<><h4>Sample page</h4><h5>Example Page</h5></>} /> 
        {/* <Route path="/navbar" element={<Nav />} />   */
      // </Routes>
        {/* {a*10 + b*20 }
        {a>1000 ? "A is large" : "A is small"}
        {a>100  && <h4>Both conditions are true</h4>} */}
    // </div>
    // );
  

      {/* Basic Conceptsin ReactJS */}
      {/* <div className="Container">CG-vak123
        
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
              /* <thead>
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

    ); } */
