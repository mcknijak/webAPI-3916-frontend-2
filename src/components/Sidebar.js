import React from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat'

import { DonutLarge } from '@mui/icons-material'
import { Chat } from '@mui/icons-material'
import { MoreVert } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'
import { useStateValue } from './StateProvider';


// use user?.photoURL for my google profile picture
const Sidebar = ({ messages }) => {
    const [{ user }, dispatch] = useStateValue()
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="https://i.imgur.com/BNKsyiR.jpeg" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat messages={messages} />
            </div>
        </div>
    )
}

export default Sidebar