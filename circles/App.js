// Render the circles using React!
const App = (props) => {
    let { circles } = props;
    //console.log('App component props:', props)
    //circles property is an array so to render it, you have to map through it
    const Circles = circles.map(Circle)
    return (
        <div>{Circles}</div>
    )
}

//const Circle = null;  // CHALLENGE: Write a separate Circle component for use in the App component
const Circle = (props, index) => {
     //console.log('Circle component props:', props) 
     //Circle property is radius & color
    //create style attribute value that is an object
    let { color, radius } = props;
    const circleStyle = {
        backgroundColor : color,
        height : radius * 2,
        width : radius * 2,
        borderRadius: '50%'
    }

    //style attribute accepts JS object instead of string
    // ? why is in it curly bracket?
     return (
         <div key={index} style={circleStyle}></div>
     )
}