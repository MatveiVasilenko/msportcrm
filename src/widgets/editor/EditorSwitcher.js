import React from 'react'
import Input from './cells/Input';
import Image from './cells/Image';
import Select from './cells/Select';
import CK from './cells/CK';
import EditorRadio from './cells/editor-radio/EditorRadio';
import EditorCheck from './cells/editor-check/EditorCheck';
import EditorDate from './cells/editor-date/EditorDate';
import EditorPhone from './cells/editor-phone/EditorPhone';

const EditorSwitcher = ({
    itemEditor,
    classes,
    dataItem,
    setDataItem,
    errorData
}) => {
    console.log(errorData)
    const config = {
        title: itemEditor.title || '',
        link: itemEditor.link || '',
        url: itemEditor.url || '',
        attribute: itemEditor.name,
        placeholder: itemEditor.placeholder || '',
        options: itemEditor.options || [],
        classes,
        dataItem,
        setDataItem,
        errors: errorData.error && errorData.error[itemEditor.name] || {}
    }
    switch (itemEditor.type) {
        case 'input':        
        return <Input {...config}/>

        case 'image':
        return <Image {...config}/>
     
        case 'select':
        return <Select {...config}/>

        case 'ck':
        return <CK {...config}/>

        case 'radio':
        return <EditorRadio {...config}/>
        
        case 'check': 
        return <EditorCheck {...config}/>

        case 'date': 
        return <EditorDate {...config}/>

        case 'phone': 
        return <EditorPhone {...config}/>
        default:
        return <div></div>    
    }
}
export default EditorSwitcher