import React from 'react'

const NavBar = (props) => {
    console.log(props)
    return (
        <div className='navbar'>
            <button onClick={props.onClick}>we in here</button>
        </div>
    )
}


export default NavBar;