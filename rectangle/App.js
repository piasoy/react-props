// Render the rectangle using React!
const App = (props) => {
    let { rectangle } = props;

    let rectangleStyle = {
        height: rectangle.height,
        width: rectangle.width,
        backgroundColor: rectangle.color
    }
    return (
        <div style={rectangleStyle}></div>
    )
}
