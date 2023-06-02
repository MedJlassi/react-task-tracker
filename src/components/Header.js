import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title,onClickHandler,formShown}) => {
    return (
        <header className="header">
            <h1 /*style={headerStyle} */>
                Task Tracker
            </h1>
            <Button
                color={formShown ? 'red' :'green'}
                text={formShown ? 'close' : 'add'}
                onClickHandler={onClickHandler}
                
            />
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