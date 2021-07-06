import React, {
    useEffect, useState
} from 'react'
import GridComponent from '../widgets/grid/GridComponent'
import classes from './../project/styles/peoples-styles.module.scss'
import { NET } from './../network';
import GridControls from './../widgets/grid/controls/GridControls';

const Peoples = () => {
    const [filter, setFilter] = useState('sport')
    const [filterType, setFilterType] = useState('type')
    const filterParams = [
        {
            title: 'Спортсмен',
            value: 'sport',
        },
        {
            title: 'Лідер спорту',
            value: 'lider',
        },
        {
            title: 'Учасник заходу',
            value: 'event',
        }
    ]
    const filterParamsSport = [
        {
            id: 1,
            value: 'Футбол',
            title: 'Футбол'
        },
        {
            id: 1,
            value: 'Волейбол',
            title: 'Волейбол'
        },
        {
            id: 1,
            value: 'Баскетбол',
            title: 'Баскетбол'
        },
        {
            id: 1,
            value: 'Кроссфит',
            title: 'Кроссфит'
        },
        {
            id: 1,
            value: 'Воркаут',
            title: 'Воркаут'
        },
        {
            id: 1,
            value: 'Смешанные единоборства',
            title: 'Смешанные единоборства'
        },
        {
            id: 1,
            value: 'Бег',
            title: 'Бег'
        },
        {
            id: 1,
            value: 'Скалолазание',
            title: 'Скалолазание'
        },
        {
            id: 1,
            value: 'Борьба',
            title: 'Борьба'
        },
        {
            id: 1,
            value: 'Йога',
            title: 'Йога'
        },
        {
            id: 1,
            value: 'Альпинизм',
            title: 'Альпинизм'
        },
        {
            id: 1,
            value: 'Бокс',
            title: 'Бокс'
        },
        {
            id: 1,
            value: 'Гимнастика',
            title: 'Гимнастика'
        },
        {
            id: 1,
            value: 'Настольный теннис',
            title: 'Настольный теннис'
        },
        {
            id: 1,
            value: 'Скандинавская ходьба',
            title: 'Скандинавская ходьба'
        },
        {
            id: 1,
            value: 'Теннис',
            title: 'Теннис'
        },
        {
            id: 1,
            value: 'Шахматы',
            title: 'Шахматы'
        },
        {
            id: 1,
            value: 'Другой',
            title: 'Другой'
        },
    ]
    const thead = [
        {
            title: 'ПІБ',
            alias: 'name'
        },
        {
            title: 'Дата',
            alias: 'date'
        },
        {
            title: 'Телефон',
            alias: 'phone'
        },
        // {
        //     title: 'Email',
        //     alias: 'email'
        // },
        {
            title: 'Спорт',
            alias: 'sport_id'
        },
        {
            title: 'Район',
            alias: 'district'
        },
        {
            title: 'Адреса',
            alias: 'adress'
        },
        // {
        //     title: 'Дети до 16',
        //     alias: 'children'
        // },
        {
            title: 'Кільк. занять',
            alias: 'sports_count'
        },
        // {
        //     title: 'Спорт в детстве',
        //     alias: 'sports_child'
        // },
    ]
    const elems = [
        {
            name: 'name',
            type: 'text',
            value: 'value'
        },
        {
            name: 'date',
            type: 'text',
            value: 'value'
        },
        {
            name: 'phone',
            type: 'text',
            value: 'value'
        },
        // {
        //     name: 'email',
        //     type: 'text',
        //     value: 'value'
        // },
        {
            name: 'sport_id',
            type: 'text',
            value: 'value'
        },
        {
            name: 'district',
            type: 'text',
            value: 'value'
        },
        {
            name: 'adress',
            type: 'text',
            value: 'value'
        },
        // {
        //     name: 'children',
        //     type: 'check',
        //     value: 'value'
        // },
        {
            name: 'sports_count',
            type: 'check',
            value: 'value'
        },
        // {
        //     name: 'sports_child',
        //     type: 'check',
        //     value: 'value'
        // }
        
    ]
    const transformData = (head, body) => {
        const header = head && head.map(el => el.alias)

        const boder = body.map((elem) => {
            let accum = {}
            header.map((headItem) => {
                Object.keys(elem).map((key) => {
                    if (headItem === key) {
                        accum[key] = elem[key]
                    }
                })
            })
            return accum
        })
        return {
            header: head,
            boder
        }
    }
    const [gridData, setGridData] = useState(null)
    useEffect(() => {
		const fetchData = async () => {
			try {		
				const url = `${NET.APP_URL}/users?${filterType}=${filter}`

				const response = await fetch(url, {
					method: 'GET',
					// cors: 'cors',
					headers: {
						'Content-Type': 'application/json'
				      // 'Content-Type': 'application/x-www-form-urlencoded',
				  },
				})
                if (response.status === 200) {
                    const result = await response.json()
                    console.log(result)
                    setGridData(transformData(thead, result))
                }
				
			} catch (e) {
				console.log(e)
			}	
		}
	fetchData()
	}, [setFilter, filter])
    
    
    // const gridData = transformData(thead, tbody)
    
    if (!gridData) {return null}
    return (
        <div>
            <GridControls 
                filter={filter}
                filterParams={filterParams}
                filterParamsSport={filterParamsSport}
                setFilter={setFilter}
                classes={classes}
                filterType={filterType}
                setFilterType={setFilterType}
            />
            <GridComponent 
                customStyles={classes}
                gridData={gridData}
                elems={elems}
            />
        </div>
    )
}
export default Peoples