import React from 'react'
import GridHeadItem from './GridHeadItem';

const GridHead = ({
    thead,
    styles,
    customStyles
}) => {
    return (
        <div className={[styles.gridHead, customStyles?.gridHead].join(' ')}>
            {
                thead && thead.map((el, idx) => (
                    <GridHeadItem
                        val={el.title}
                        styles={styles}
                        key={`headItem${idx}`}
                    />
                ))
            }
        </div>
    )
}
export default GridHead