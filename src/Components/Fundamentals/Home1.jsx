import React from "react";

function Home1() { 
    return (
        <div className="Home1">
            <h2 className="heading"> Home1 Component</h2>
            <p>This is the Home1 component of the React application.</p>
            <hr/>
            <Home11 />
            <hr/>
            <Home12 />  
        </div>
    );
}

function Home11() {
    return (
        <div className="Home11">
            <h2 className="heading"> Home11 Component</h2>
            <p>This is the Home11 component of the React application.</p>
        </div>
    );
}

function Home12() {
    return (
        <div className="Home12">
            <h2 className="heading"> Home12 Component</h2>
            <p>This is the Home12 component of the React application.</p>
        </div>
    );
}

function Home2() {
    return (
        <div className="Home2">
            <h2 className="heading"> Home2 Component</h2>
            <p>This is the Home2 component of the React application.</p>
        </div>
    );
}

// Another named export using arrow function - Functional component
const Home3 = () => {
    return (
        <div className="Home3">
          <h4>Home3 Component</h4>
        </div>
    );
}

export default Home1; // ✅ default export
export { Home2, Home3    };  // ✅ named exports

/*
Key Differences (Easy Table)  --- default export & named export
--------------------------------------------------------------------------
Feature	          export default	    export (named)
Number allowed	  Only 1	            Multiple
Import name	      Any name	          Must match
Curly braces{}  	❌ No             	✅ Yes
Common usage	  Main component        Utility / multiple components

*/