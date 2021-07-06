import React from 'react'

const GridHeadItem = ({
    val,
    styles,
    customStyles
}) => {
    return (
        <div className={[styles.gridHeadItem, customStyles?.gridWrapper].join(' ')}>{val}</div>
    )
}
export default GridHeadItem