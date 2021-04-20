import { LoadingStatus } from '../../types';

export interface ITicket {
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

export interface TicketsState {
  items: ITicket[]
  loadingStatus: LoadingStatus
}
