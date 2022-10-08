import { useState } from 'react'
import { addDays, subDays, format, formatISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Icon } from './../Icons'

export const DateSelect = ({ currentDate, onChange }) => {
    const date = new Date(currentDate)

    const prevDay = () => {
        const novaData = subDays(date, 1)
        onChange(formatISO(novaData))
    }
    const nextDay = () => {
        const novaData = addDays(date, 1)
        onChange(formatISO(novaData))
    }

    return (
        <div className="p-4 flex space-x-4 items-center justify-center">
            <Icon name="arrowLeft" onClick={prevDay} className="h-[20px] text-red2" /> 
            <spam className="font-bold">{format(date, "d 'de' MMMM", {locale: ptBR})}</spam>
            <Icon name="arrowRight" onClick={nextDay} className="h-[20px] text-red2" />
        </div>
    )
}
