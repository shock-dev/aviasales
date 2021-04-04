export interface Ticket {
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

export enum TicketsActionTypes {
    FETCH_REQUEST = 'tickets/FETCH_REQUEST',
    FETCH_SUCCESS = 'tickets/FETCH_SUCCESS',
    FETCH_ERROR = 'tickets/FETCH_ERROR'
}

export interface TicketsState {
    readonly loading: boolean
    readonly data: Ticket[]
    readonly errors?: string
}

interface FetchRequestAction {
    type: TicketsActionTypes.FETCH_REQUEST
    payload: boolean
}

interface FetchSuccessAction {
    type: TicketsActionTypes.FETCH_SUCCESS
    payload: Ticket[]
}

interface FetchErrorAction {
    type: TicketsActionTypes.FETCH_ERROR
    payload: string
}

export type TicketsAction =
    FetchRequestAction |
    FetchSuccessAction |
    FetchErrorAction
