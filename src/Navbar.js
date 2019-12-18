import React from 'react'

const NavBar = (props) => {
    return (
        <div className='navbar'>
            <button onClick={props.onClick}>we in here</button>
            <button onClick={props.makeArray}>Reset Array</button>
        </div>
    )
}


export default NavBar;