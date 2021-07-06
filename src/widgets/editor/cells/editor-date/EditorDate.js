import React, {
    useState
} from 'react'
import Calendar from 'react-calendar';

const EditorDate = ({
    title,
    placeholder,
    classes,
    dataItem,
    setDataItem,
    attribute,
    errors
}) => {
    const [showCalendar, setShowCalendar] = useState(false)
    return (
        <div className={classes.editor__item}>
            <div className={classes.editor__item__title}>
                {title}
            </div>
            <div className={errors && errors.length > 0 ? [classes.editor__item__input, classes.editor__input__error].join(' ') : classes.editor__item__input} >
                <input placeholder={placeholder} value={dataItem[attribute]} type="text" onClick={(e) => {
                    setShowCalendar(true)
                }} />
            </div>
            {showCalendar ? <div>
                <Calendar
                    onChange={(e) => {
                        const date = new Date(e)
                        const day = String(date.getDate()).length < 2 ? `0${date.getDate()}` : date.getDate()
                        const month = String(date.getMonth()).length < 2 ? `0${date.getMonth()}` : date.getMonth()
                        const year = date.getFullYear()
                        console.log(date.getDate().length)
                        setDataItem({
                            ...dataItem,
                            [attribute]: `${day}-${month}-${year}`
                        })
                        setShowCalendar(false)
                    }}
                    // value={}
                />
            </div> : <></>}
            <div className={classes.editor__error}>
                {errors && errors.length > 0 && errors.map((err, idx) => (
                    <div key={`err${attribute}${idx}`}>{err}</div>
                ))}
            </div>
        </div>
    )
}
export default EditorDate