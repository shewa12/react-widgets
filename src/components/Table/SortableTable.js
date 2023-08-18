import { useState } from "react";
import Table from "./Table";

const SortableTable = (props) => {
    // Sorting states
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);
    const [activeSortingColumn, setActiveSortingColumn] = useState(null);
    const { config, data } = props;

    // Handle sorting
    const handleClick = (label) => {
        setActiveSortingColumn(label);
        // if (sortBy && sortBy !== label) {
        //     setSortBy(label);
        //     setSortOrder('asc');
        //     return;
        // }

        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else {
            setSortOrder(null);
            setSortBy(null);
        }
    }

    // Sort & Update data 
    let sortedData = data;
    if (sortBy && sortOrder) {
        // Get only sortedBy object from config & destructor sortValue
        const { sortValue } = config.find( column => column.label === sortBy);

        // Make a copy and sort data
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            let reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        });
    }

    const getSortIconClassName = (label) => { 
        if (activeSortingColumn && label !== activeSortingColumn) {
            return 'bi bi-arrow-down-up';
        }
        
        let sortIcon = sortOrder === 'asc' ? 'bi bi-arrow-up' : sortOrder === 'desc' ? 'bi bi-arrow-down' : 'bi bi-arrow-down-up';
       return sortIcon; 
    }

    // Add header function if has sortValue prop
    const updatedConfig = config.map(column => {
        if (!column.sortValue) {
            return column;
        }
        return {
            ...column,
            header: () => {
                return <th onClick={ () => { handleClick(column.label) } }> <i className={ getSortIconClassName(column.label) }></i> { column.label }</th>
            }
        }

    });

    // Overwrite config
    return <Table { ...props } data={ sortedData } config={ updatedConfig } />;
}
export default SortableTable;