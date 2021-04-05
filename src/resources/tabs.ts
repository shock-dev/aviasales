export interface TabInterface {
    readonly id: number
    readonly name: string
    readonly val: string
}

export const tabs: TabInterface[] = [
    {
        id: 1,
        name: 'Самый дешевый',
        val: 'cheap'
    },
    {
        id: 2,
        name: 'Самый быстрый',
        val: 'fast'
    },
    {
        id: 3,
        name: 'Оптимальный',
        val: 'optimal'
    }
];
