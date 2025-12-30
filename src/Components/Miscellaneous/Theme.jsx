 import { useState, useEffect}  from "react";
// User defined Hook
export function useTime(){
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());            
        }, 1000);
        return () => clearInterval(id);
    }, []);
 return time;
}

// Theme using useState
export default function Theme() {
    const time = useTime();
    // Initial Color setting by useState hook
     const [color, setColor] = useState("lightcoral");
     return(
      <div style={{ float: "right", marginRight:20}}>
        <p style={{color:color}}> My Chosen Color <Avatar /> 
          
          Pick a color: {color} 
           <select value={color} onChange={(e) => setColor(e.target.value)} > 
          <option value="lightcoral">lightcoral</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="pink">Pink</option>
          <option value="rebeccapurple">rebeccapurple</option>
          </select>         
       </p>
         <Clock color={color} time={time.toLocaleTimeString()} />
       </div>
    );
}

// Applying the theme to the current time
// Clock - Child Component, retyrning time
function Clock({ color, time}){
    return <h1 style={{ color:color}}>{time}</h1>
}


// Avatar
function Avatar(){
    const avatar= "https://cdn-icons-png.flaticon.com/128/1326/1326377.png";
    const description = "Manik Jakim";
    return(
        <img 
        className="avatar"
        src={avatar}
        alt={description}
        width={50}
        height={50}
        style={{ borderRadius: 30}} >
        </img>
    ) ;
}

