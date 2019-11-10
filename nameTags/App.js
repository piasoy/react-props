// Render the name tags using React!
const App = (props) => {
    let { nameTags } = props;
    //console.log('App component props:', props)
    //loop through nameTags

    let NameTags = nameTags.map(NameTag)
    return (
        <div>{NameTags}</div>
    )
}

// CHALLENGE: Write a separate NameTag component for use in the App component
// TIP: Use props to pass the name to each NameTag component
//const NameTag = null;  
const NameTag = (props, index) => {
    const OuterDivStyle = {
        textAlign: 'center',
        border: '1px solid gray',
        width: '200px',
        margin: 'auto',
        fontSize: '20px'
    }
    const InnerTopDivStyle = {
        color: 'white',
        backgroundColor: 'blue',
        height: '50px',
        lineHeight: '45px'
    }
    const InnerBottomDivStyle = {
        backgroundColor: 'white',
        height: '80px',
        lineHeight: '75px'
    }

    //*ask about  key={index} in class*
    return (<div key={index} style={OuterDivStyle}>
                <div style={InnerTopDivStyle}>
                    <p>Hello, my name is</p>
                </div>
                <div style={InnerBottomDivStyle}>{props}</div>
            </div>)
}

