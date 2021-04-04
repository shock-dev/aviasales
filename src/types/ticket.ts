export interface TicketInterface {
    price: number
    carrier: string
    segments: [
        {
            origin: string
            destination: string
            date: string
            stops: string[]
            duration: number
        },
        {
            origin: string
            destination: string
            date: string
            stops: string[]
            duration: number
        }
    ]
}
