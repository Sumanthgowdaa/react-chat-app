import React from 'react'
import env from 'react-dotenv'
import ChatContainer from '../chat/ChatContainer'
import "./home.scss"



function Home(props) {
    let x = 123;
    console.log(env.PROJECT_ID)
    return (
        <div className='app-body'>
            <ChatContainer />
        </div>
    )
}

export default Home