import React, { Component }  from "react";

export default class ClassHome extends Component { 
render() {
    return (
        <div className="HomeClass">
            <h2 className="heading"> ClassHome Component</h2>
            <p>This is the ClassHome component of the React application.</p>
        </div>
    );  
}
}

export class ClassHome2 extends React.Component {
    render() {
        return (
            <div className="ClassHome2">
                <h2 className="heading"> ClassHome2 Component</h2>
                <p>This is the ClassHome2 component of the React application.</p>
            </div>
        );  
    }   
}

class ClassHome3 extends Component {
    render() {
        return (
            <div className="ClassHome3">
                <h2 className="heading"> ClassHome3 Component</h2>
                <p>This is the ClassHome3 component of the React application.</p>   
            </div>
        );  
    }   
}
export { ClassHome3 };

// export default ClassHome; 
// ✅ default export