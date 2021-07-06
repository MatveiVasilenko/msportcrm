import React from 'react'
import GridBody from './components/GridBody';
import GridHead from './components/GridHead';
import styles from './grid-styles.module.scss'

const GridComponent = ({
    gridData, // thead, tbody - данные с сервера
    elems, // какие будут колонки
    customStyles // кастомные стили в scss
}) => {
    return (
        <div className={[styles.gridWrapper, customStyles?.gridWrapper].join(' ')}>
            <GridHead 
                styles={styles}
                thead={gridData.header}
                customStyles={customStyles}
            />
            <GridBody 
                styles={styles}
                tbody={gridData.boder}
                elems={elems}
                customStyles={customStyles}
            />
        </div>
    )
}
export default GridComponent

//Document styles - CustomStyles
// gridWrapper - main wrapper
// gridHead - main wrapper head
// gridHead
// gridHeadItem
// gridBody
// gridRow
// gridRowItem