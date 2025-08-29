import { DataTable } from '@/shared/components/ui/data-table'
import React, { useEffect, useRef, useState } from 'react'
import { columns } from './columns'
import StatusCodes from '@/shared/constants/status-codes'
import ClientesService from '@/entities/clientes/api'
import { AsesorCombobox } from '@/entities/asesores/ui/AsesoresList'

export default function ListClientesFeature() {

    const [data, setData] = useState<ClienteData[]>([])
    const pending = useRef(false)

    useEffect( () => {
        if(pending.current) return
        pending.current = true

        async function fetchData(){
            const clientes = new ClientesService()
            const {status, data} = await clientes.list()

            if(status == StatusCodes.REQUEST_COMPLETED) {
                const clientes: ClienteData[] = data.results 
                setData(clientes)
            }

        }

        fetchData(). finally(() => {
            pending.current = false
        })

    }, [])

    const asesores = Array.from(
    new Map(
        data
        .map(c => {
            if (typeof c.asesor !== "string" && typeof c.asesor.user !== "string" && c.asesor.user?.names) {
            return [
                c.asesor.user.names,
                { value: c.asesor.user.names, label: c.asesor.user.names }
            ] as [string, { value: string; label: string }]
            }
            return null
        })
        .filter(Boolean) as [string, { value: string; label: string }][]
    ).values()
    )


  return (
    <div className='w-full'>
        <AsesorCombobox options={asesores} />
        <DataTable columns={columns} data={data} />
    </div>
  )
}
