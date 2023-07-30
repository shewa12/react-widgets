const Table = ({data, config, keyFn}) => {

    const tableHeaders = config.map(item => <th key={item.label}>{item.label}</th>);

    // Map data to create rows
    const tableRows = data.map(row => {
        const tableCells = config.map(item => {
            return <td key={item.label}>{item.render(row)}</td>
        });

        return (
            <tr key={ keyFn(row) }>
                { tableCells }
            </tr>
        )
    });
    
    return (
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    { tableHeaders }
                </tr>   
            </thead>
            <tbody>
                { tableRows }
            </tbody>
        </table>
    )
}
export default Table;