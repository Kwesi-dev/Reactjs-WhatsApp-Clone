import React,{useEffect, useState} from 'react'
import db from './firebase'
import { Avatar } from '@material-ui/core'
import './SidebarChat.css'
import {Link} from 'react-router-dom'
function SidebarChat({id, name, AddNewChat}){
    const [seed, setSeed] = useState('')
    const [messages, setMessages] = useState('')

    useEffect(() => { 
        if(id) {
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
                setMessages(snapshot.docs.map((doc) => doc.data()))
            ))
        }
    },[])

    useEffect(() => {
        setSeed(Math.floor(Math.random()*5000))
    }, [])

    const createChat = ()=>{
        const roomName = prompt("Please enter name for chat")
        if(roomName){
            //do some clever database here
            db.collection('rooms').add({
                name: roomName,
            });
        }
    }  

    return !AddNewChat ? (
        <Link to = {`/rooms/${id}`}>
            <div className ="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>   
        </Link>
    ):(
        <div onClick = {createChat} className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    )
}

export default SidebarChat