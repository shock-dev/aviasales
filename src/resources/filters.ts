export interface FilterDataInterface {
  readonly id: number
  readonly name: string
  readonly val: string
  checked: boolean
  readonly only?: true
}

export const filters: FilterDataInterface[] = [
  {
    id: 1,
    name: 'Все',
    val: 'all',
    only: true,
    checked: true
  },
  {
    id: 2,
    name: 'Без пересадок',
    val: 'without',
    checked: false
  },
  {
    id: 3,
    name: '1 пересадка',
    val: '1p',
    checked: false
  },
  {
    id: 4,
    name: '2 пересадка',
    val: '2p',
    checked: false
  },
  {
    id: 5,
    name: '3 пересадка',
    val: '3p',
    checked: false
  }
];
