// Render the cards using React!
const App = (props) => {
    let { cards } = props;
    //console.log(props)
    let Cards = cards.map(Card)
    return (
        <div>{Cards}</div>
    )
}

// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
//const Card = null;  
const Card = (props, index) => {
 
    let {value, suit} = props
    let url = "cards/" + value + suit + ".png"
    let divStyle = {
        display: 'inline'
    }
    let imageStyle = {
        width: '100px'     
    }
    
    return (
        <div key={index} style={divStyle}><img style={imageStyle} src={url}></img></div>
    )

}
