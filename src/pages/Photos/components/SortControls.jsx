import React, {useState, useContext} from 'react'
import {PhotosContext} from '../../../context/photos/photosContext';

const SortControls = () => {
    const { handleSort } = useContext(PhotosContext);
    const [active, setActive] = useState(null);

    const handleClick = field => {
        if(active === field) return;
        setActive(field);
        handleSort(field)
    }

    const getBtnClass = activeClass => {
        return `btn btn-secondary ${active === activeClass ? 'active' : ''}`;
    }

    return (
        <div className="sort-controls btn-group btn-group-sm">
            <button onClick={() => handleClick('name')} type="button" className={getBtnClass('name')}>Name</button>
            <button onClick={() => handleClick('size')} type="button" className={getBtnClass('size')}>Size</button>
            <button onClick={() => handleClick('modifiedDate')} type="button" className={getBtnClass('modifiedDate')}>Modified</button>
        </div>)
}

export default SortControls;
