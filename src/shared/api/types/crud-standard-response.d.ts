type CRUDStandardResponse <T> = StandardResponse<CRUDStandard<T>>

type CRUDStandard <T> = {
    count: number
    next: string
    previous: string
    results: T
}