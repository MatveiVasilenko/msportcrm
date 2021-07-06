import React from 'react'
import GridRow from './GridRow';

const GridBody = ({
    tbody,
    elems,
    styles,
    customStyles
}) => {
    return (
        <div className={[styles.gridBody, customStyles?.gridWrapper].join(' ')}>
            {tbody.map((elem, idx) => (
                <GridRow
                    styles={styles}
                    elems={elems} 
                    elem={elem}
                    key={`trow${idx}`}
                />
            ))}
        </div>
    )
}
export default GridBody