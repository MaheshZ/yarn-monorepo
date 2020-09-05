
import React from "react"
import './nav.scss'
const WombatNav = props => {
    return (<nav className='nav'>
        <div>Hot New Product!!</div>
          <div>Home</div>  
          <div>Profile</div>
          <div>Docs</div>
          <div>Search <input type='textbox'/> </div>
          <div>Logout</div>  
      </nav>)
}

export {WombatNav}
