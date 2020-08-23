import React from 'react'
import {FileIcon, ImageIcon, ShareAndroidIcon, ClockIcon, LinkIcon, FileSubmoduleIcon} from '@primer/octicons-react';
import { NavLink } from 'react-router-dom';

const navigation = [
    {
        title: 'Files',
        url: 'files',
        icon: <FileIcon />,
    },
    {
        title: 'Photos',
        url: 'photos',
        icon: <ImageIcon />,
    },
    {
        title: 'Sharing',
        url: 'sharing',
        icon: <ShareAndroidIcon />,
    },
    {
        title: 'Links',
        url: 'links',
        icon: <LinkIcon />,
    },
    {
        title: 'Events',
        url: 'events',
        icon: <ClockIcon />,
    },
    
    {
        title: 'Get started',
        url: 'get-started',
        icon: <FileSubmoduleIcon />,
        children: <span className="badge badge-secondary">3</span>
    }
]

const Navigation = () => {
    return (
        <nav>
               <ul>
                   {
                       navigation.map(({url, icon, title, children}) => (
                        <NavLink
                            key={url}
                            to={`/${url}`}
                        >
                            <span className="flex-fill">{icon} <span className="align-middle">{title}</span></span> {children}
                        </NavLink>
                       ))
                   }
               </ul>
           </nav>
    )
}

export default Navigation
