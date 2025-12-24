import React ,{useState} from "react";

function InlineStyles() {
  // Inline styles
  const headingStyle = {
    color: "blue",
    textAlign: "center",
    marginTop: "20px",
  };
  const paragraphStyle = {
    fontSize: "18px",
    lineHeight: "1.6",
    margin: "10px 0",
  };
  const value =  true;
  //State to demonstrate dynamic inline styles (optional)
  const [isHighlighted, setIsHighlighted] = useState({value});
  return (
    <div>
      <h2 style={headingStyle}>Inline Styles in React</h2>  
      <p style={paragraphStyle}>
        This paragraph is styled using inline styles defined as JavaScript objects within the component.
      </p>
      Example of inline style directly in JSX
      <p style={{ color: "red", fontSize: "16px" }}>Error</p>
      
      <button
      style={{  // Dynamic inline style based on state
        backgroundColor: isHighlighted ? "green" : "orange", // background-color is changed to backgroundColor in JSX
        border: "none",
        borderRadius: "5px",
        color: "white",
        padding: "10px"
      }}
      onClick={() => setIsHighlighted(!isHighlighted)}
     >
      Toggle
    </button>

    </div>
  );
}
export default InlineStyles;
