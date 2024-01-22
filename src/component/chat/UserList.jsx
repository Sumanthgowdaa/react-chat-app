import React, { useEffect, useState, useContext } from 'react'
import {chatList} from './content/data'
import "./css/userList.scss"
import { AuthContext } from '../../Context/AuthContext'

function UserList() {
  const [user, setUser] = useState(false)
  const context = useContext(AuthContext)

  useEffect(() => {
    // setUser(chatList)
  },[])

  if(!user) {
    return (
     <div className="chat-list">
         <div className="blk no-user">
          <p className='info'>Search for Users</p>
          <p className="alert">No Users</p>
          <p> { context.x } </p>
          <p> { context.currentUser } </p>
      </div>
     </div>
    )
  }

  return (
    <div className='chat-list'>
        {
            user && user.map((item,index) => {
                return (
                  <div className={ item.unread ? "blk unread" : "blk"} key={index}>
                      <div className="imgbx">
                        <img src={item.image} alt="no image" />
                      </div>
                      <div className="details">
                          <div className="listhead">
                              <h4> { item.name } </h4>
                              <p className="time"> { item.chat_time } </p>
                          </div>
                          <div className="message_p">
                              <p> { item.chat_content } </p>
                          </div>
                      </div>
                  </div>
                )
            })
        }
    </div>
  )
}

export default UserList
