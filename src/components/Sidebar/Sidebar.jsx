import React from 'react';
import {ArrowUpIcon, PackageIcon} from '@primer/octicons-react';
import Navigation from './components/Navigation';
import DiskInfo from './components/DiskInfo';

const Sidebar = () => {
    return (
        <div className="sidebar">
           <strong className="sidebar-logo"><PackageIcon size={60}/></strong>
           <Navigation />
           <DiskInfo />
           <button className="btn btn-outline-light"><ArrowUpIcon /> Upgrade account</button>
        </div>
    )
}

export default Sidebar
