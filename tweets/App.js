// Render the tweets using React!
const App = (props) => {
    let { tweets } = props;
    //console.log(props)
   let Tweets = tweets.map(Tweet)

    return (
        <div>{Tweets}</div>
    )
}

//const Tweet = null;  // CHALLENGE: Write a separate Tweet component for use in the App component
const Tweet = (props, index) => {
    //console.log(props)
    let {user, text, likes, retweets, replies} = props
    let TweetDivStyle = {
        marginTop:'50px'
    }
    return (<div key={index} style={TweetDivStyle}>
                <User user={user} />
                <h2>{text}</h2>
                <Metrics replies={replies} retweets={retweets} likes={likes}/>
            </div>)
}
//const User = null;  // CHALLENGE: Write a separate User component for use in the Tweet component
const User = (props) => {
    //console.log(props)
    let { user } = props
    let UserOuterDivStyle = {
        display:'flex',
        alignItems:'flex-start'
    }
    let UserProfileDivStyle = {marginLeft: '20px'}
    let UserNameOuterDivStyle = {
        display: 'flex',
        alignItems: 'flex-start'
    }
    let UserNameStyle = {
        marginBottom: '5px',
        marginRight: '5px'
    }
    let CheckStyle = {width: '15%'}
    let UserAvatarStyle = {width: '5%'}
    let checkImg = "twitterIcons/check-circle.svg"

    const isVerified = (user) => {
        return (user.isVerified ? checkImg : '')
    }
   
    return (<div style={UserOuterDivStyle}>
                <img style={UserAvatarStyle} src={user.profilePic}/> 
                <div style={UserProfileDivStyle}>
                    <div style={UserNameOuterDivStyle}>
                        <p style={UserNameStyle}>{user.username}</p>
                        <img style={CheckStyle} src={isVerified(user)}/> 
                    </div>
                    <p>{user.handle}</p>
                </div>              
            </div>
            )
}
//const Metrics = null;  // CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)
const Metrics = (props) => {
   
   
    let MetricsOuterDivStyle = {
        display: 'flex',
        flowDirection: 'row',
        alignItems: 'flex-start'
    }
    let MetricsInnerDivStyle = {
        display: 'flex',
        width: '10%'
    }

    let ImgStyle = {
        width: '27%',
        marginRight: '7px'
    }

    let ParagraphStyle = {
        marginTop:'7px',
        marginBottom: '0px'
    }

    let commentImg = "twitterIcons/message-circle.svg"
    let retweetImg = "twitterIcons/repeat.svg"
    let likeImg = "twitterIcons/heart.svg"
    let msgImg = "twitterIcons/message-circle.svg"
    return (<div style={MetricsOuterDivStyle}>
                 <div style={MetricsInnerDivStyle}>
                    <img style={ImgStyle} src={commentImg}/> 
                    <p style={ParagraphStyle}>{props.replies}K</p>
                 </div>
                 <div style={MetricsInnerDivStyle}>
                    <img style={ImgStyle} src={retweetImg}/> 
                    <p style={ParagraphStyle}>{props.retweets}K</p>
                 </div>
                 <div style={MetricsInnerDivStyle}>
                    <img style={ImgStyle} src={likeImg}/> 
                    <p style={ParagraphStyle}>{props.likes}K</p>
                 </div>
                 <div style={MetricsInnerDivStyle}>
                    <img style={ImgStyle} src={msgImg}/> 
                 </div>
            </div>
    )
}
// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly