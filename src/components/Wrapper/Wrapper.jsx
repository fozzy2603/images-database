import React from 'react'
import Sidebar from '../Sidebar';
import { PhotosProvider } from '../../context/photos/PhotosProvider';

const Wrapper = ({children}) => {
    return (
        <PhotosProvider>
            <div className="wrapper">
                <Sidebar/>
                <div className="content">
                    {children}
                </div>
            </div>
        </PhotosProvider>
    )
}

export default Wrapper
