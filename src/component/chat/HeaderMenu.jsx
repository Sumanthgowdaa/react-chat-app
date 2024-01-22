import React from 'react'
import "./css/headermenu.scss"


function HeaderMenu() {
  return (
    <div className="header">
       <div className="userimg">
          <img src="https://robohash.org/Allison.png?set=set4" alt="no user" />
       </div>
       <div className="icons">
        <i className="bi bi-megaphone-fill"></i>
        <i className="bi bi-people-fill"></i>
        <i className="bi bi-chat-dots"></i>
        <i className="bi bi-three-dots-vertical"></i>
       </div>
    </div>
  )
}

export default HeaderMenu
