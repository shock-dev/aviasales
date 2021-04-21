export interface FilterDataInterface {
  readonly id: number
  readonly name: string
  readonly val: number | string
}

export const filters: FilterDataInterface[] = [
  {
    id: 1,
    name: 'Все',
    val: 'all'
  },
  {
    id: 2,
    name: 'Без пересадок',
    val: 0
  },
  {
    id: 3,
    name: '1 пересадка',
    val: 1
  },
  {
    id: 4,
    name: '2 пересадка',
    val: 2
  },
  {
    id: 5,
    name: '3 пересадка',
    val: 3
  }
];
