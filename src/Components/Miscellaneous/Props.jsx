// Props means properties, which makes components reusable
// Props perform essential functions, they pass data from one component to another
// Props act as a channel for component communication
// Props are passed from parent to child and help your parent
// Access prperties that made it into the parent's tree

import {useTime} from './Theme.jsx'  // User defined hook defined in Theme.jsx file

//Example 1 - Functional component User is the child component for CurrentUser parent, uses props
export function User(props){  // User is the child component
    // name is property used over here
    return (<> <span>  Hello {props.name}!  </span> </>);
}

//Paernt Functional Component - CurrentUser will be the parent component
export function CurrentUser(){
// useTime is a user-defined hook creared in Theme.jsx, returns current data&time
const time = useTime(); 
return(
    // React Fragments
    // Empty tag
    <> 
        <User name="John" />
        <Message msg=" Welcome Back!!!" date={time.toLocaleTimeString()} />
        <Message1 msg=" on " date={time.toLocaleDateString()} />
    </>
);
}


// // Example 2
// // Message - Child Component - for CurrentUser - Receiving 2 components
function Message(props){
    return (<span> 
                {props.msg} @ {props.date}
            </span>
        );
}

// //  Example 3 - Child Component for CurrentUser
// Component with destructuring feature of JS 
function Message1( {msg, date} ) {
    return ( 
        <>
        <span>
            {msg} {date}
        </span>
        </>
    )
}

export function getImageUrl1(person, size='s'){
    return (
        // "https://tse4.mm.bing.net/th/id" +
        //  person.imageId + size + ".jpg"
        "https://www.kasandbox.org/programming-images/avatars/spunky-sam.png" 
    );
}

export function Avatar({ person, size}){
    return (
        <img 
            className="avatar"
            src={getImageUrl1(person)}
            alt={"person.name"}
            width={size}
            height={size}
            />
        );
}

// Destructuring Prop - children(default)
function Card({ children }){
    return <div className="card"> 
                {children}
            </div>
}    

// Parent Component - Avatar
// Card component is nested in the Profile component - Avatar is nested in the Card Component
export default function Profile(){
    return (
        <Card>
            <Avatar 
                size={40}
                person={({name: "Johnson", imageId: "Yfeoqp2" })}
            />
        </Card>
    )
}

