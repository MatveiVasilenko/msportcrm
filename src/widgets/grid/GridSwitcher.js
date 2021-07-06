import React from 'react'
import Text from './cells/Text';
import Check from './cells/Check';

const GridSwitcher = ({
    type,
    value,
    styles,
    customStyles
}) => {
    const config = {
        value,
        styles,
        customStyles: customStyles || {}
    }

    switch(type) {
        case 'text':
            return (
                <Text {...config}/>
            );

        case 'check':
            return (
                <Check {...config}/>
            );
        default: return
    }
}
export default GridSwitcher