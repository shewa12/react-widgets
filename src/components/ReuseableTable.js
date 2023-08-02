import SortableTable from "./Table/SortableTable";

const ReuseableTable = () => {
    // Array of data to populate table rows
    const data = [
        { 'name': 'Mango', 'color': 'green', 'size': 'small' },
        { 'name': 'Banana', 'color': 'yellow', 'size': 'medium' },
        { 'name': 'Apple', 'color': 'red & green', 'size': 'medium' },
        { 'name': 'Pineapple', 'color': 'green & yellow', 'size': 'large' },
    ];

    // Table config
    const config = [
        {
            label: 'Fruit',
            render: fruit => fruit.name,
            sortValue: fruit => fruit.name
        },
        {
            label: 'Color',
            render: fruit => fruit.color,
        },
        {
            label: 'Size',
            render: fruit => fruit.size,
            sortValue: fruit => fruit.size
        },
    ];

    const keyFn = (fruit) => fruit.name; 

    return (
        <SortableTable data= { data } config={ config } keyFn={ keyFn } />
    )
}
export default ReuseableTable;