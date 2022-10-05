import { useState } from 'react'
import { addDays, subDays, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Icon } from './../Icons'

const initialDate = "2022-11-20T11:00:00Z"
export const DateSelect = () => {
    const [currentDate, setCurrentDate] = useState(new Date(initialDate))

    const prevDay = () => {
        const novaData = subDays(currentDate, 1)
        setCurrentDate(novaData)
    }
    const nextDay = () => {
        const novaData = addDays(currentDate, 1)
        setCurrentDate(novaData)
    }

    return (
        <div className="p-4 flex space-x-4 items-center justify-center">
            <Icon name="arrowLeft" onClick={prevDay} className="h-[20px] text-red2" /> 
            <spam className="font-bold">{format(currentDate, "d 'de' MMMM", {locale: ptBR})}</spam>
            <Icon name="arrowRight" onClick={nextDay} className="h-[20px] text-red2" />
        </div>
    )
}
