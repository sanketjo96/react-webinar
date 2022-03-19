// Reusable component
const RButton = ({text, handler}) => {
    return React.createElement(
        'button', 
        { onClick: handler, className: "button" }, 
        text
    )
}