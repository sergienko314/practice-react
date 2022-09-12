import PropTypse from 'prop-types'
const Header = ({ title, btnContent }) => {
    return (
        <header>
            { btnContent && <button>{btnContent}</button> }
            <h1>{ title }</h1>
        </header>
    )
}

export default Header

Header.propTypse = {
    title: PropTypse.string.isRequired
}