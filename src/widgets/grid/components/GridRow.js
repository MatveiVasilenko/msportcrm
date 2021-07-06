import React from 'react'
import GridSwitcher from './../GridSwitcher';

const GridRow = ({
    elems,
    elem,
    styles,
    customStyles
}) => {
    console.log(elems)
    return (
        <div className={[styles.gridRow, customStyles?.gridWrapper].join(' ')}>
            {
                elems.map((cell, idx) => (
                    <GridSwitcher 
                        styles={styles}
                        key={`switchGrid${idx}`}
                        type={cell.type || 'text'}
                        value={elem[cell.name] || ''}
                    />
                ))
            }
        </div>
    )
}
export default GridRow