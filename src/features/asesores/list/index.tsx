import { DataTable } from '@/shared/components/ui/data-table'
import React, { useEffect, useRef, useState } from 'react'
import { columns } from './columns'
import AsesoresService from '@/entities/asesores/api'
import StatusCodes from '@/shared/constants/status-codes'

export default function ListAsesoresFeature() {

    const [data, setData] = useState<AsesorData[]>([])
    const pending = useRef(false)

    useEffect( () => {
        if(pending.current) return
        pending.current = true

        async function fetchData(){
            const asesores = new AsesoresService()
            const {status, data} = await asesores.list()

            if(status == StatusCodes.REQUEST_COMPLETED) {
                setData(data.results)
            }

        }

        fetchData(). finally(() => {
            pending.current = false
        })

    }, [])


  return (
    <div className='w-full'>
        <DataTable columns={columns} data={data} />
    </div>
  )
}
