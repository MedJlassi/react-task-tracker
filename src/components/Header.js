import PropTypes from 'prop-types'


const Header = (props) => {
    return (
        <header className="header">
            <h1 /*style={headerStyle} */>
                {props.title}
            </h1>
            <button className="btn">Add</button>
        </header>
    )
}


//Header.defaultProps = {
//    title: 'Task Tracker'
//}

//const headerStyle = {
//  color: 'red',
//  backgroundColor: 'black'
//}

//Header.propTypes = {
//    title: PropTypes.string.isRequired
//}

export default Header