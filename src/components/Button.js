import PropTypes from 'prop-types'

const Button = ({color,text,onClickHandler,shown}) => {
    return (
        <button onClick={ onClickHandler} 
        style={{backgroundColor:color}} 
        className="btn">
            {text}
        </button>
        )
}

Button.defaultProps = {
    color:"steelblue",
    text:"hello button"
}
Button.propTypes ={
    color:PropTypes.string,
    text:PropTypes.string.isRequired,

}

export default Button