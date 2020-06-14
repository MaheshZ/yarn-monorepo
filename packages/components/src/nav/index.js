
import React from "react"
import './nav.css'
const WombatNav = props => {
    return (<nav className='nav'>
          <div>Home</div>  
          <div>Profile</div>
          <div>Search <input type='textbox'/> </div>
          <div>Logout</div>  
      </nav>)
}

export {WombatNav}
