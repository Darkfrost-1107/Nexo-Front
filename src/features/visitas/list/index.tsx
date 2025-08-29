import { DataTable } from '@/shared/components/ui/data-table'
import React, { useEffect, useRef, useState } from 'react'
import { columns } from './columns'
import StatusCodes from '@/shared/constants/status-codes'
import VisitasService from '@/entities/visitas/api'

export default function ListVisitasFeature() {

    const [data, setData] = useState<VisitaData[]>([])
    const pending = useRef(false)

    useEffect( () => {
        if(pending.current) return
        pending.current = true

        async function fetchData(){
            const visitas = new VisitasService()
            const {status, data} = await visitas.list()

            if(status == StatusCodes.REQUEST_COMPLETED) {
                const visitas: VisitaData[] = data.results
                setData(visitas)
            }
        }

        fetchData().finally(() => {
            pending.current = false
        })
    }, [])


  return (
    <div className='w-full'>
        <DataTable columns={columns} data={data} />
    </div>
  )
}
