import React from 'react'

const Text = ({
    value,
    styles,
    customStyles
}) => {
    return (
        <div className={[styles.gridRowItem, customStyles?.gridRowItem].join(' ')}>
            <div>{value}</div>
        </div>
    )
}
export default Text