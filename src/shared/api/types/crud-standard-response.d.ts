type CRUDStandardResponse <T> = StandardResponse<CRUDStandard>

type CRUDStandard = {
    count: number
    next: string
    previous: string
    results: T
}