import { AgGridReact } from "ag-grid-react";
import { useCallback, useMemo, useState } from "react";
import { getData } from "../service/dataService";
import './financialInstrument.css';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-balham.css"; // Optional Theme applied to the grid
import { priceColor, setBackgoundColor, sortByAssetClass } from "../utils/utility";


const FinancialInstrument = () => {
    const [rowData, setRowData] = useState<FinancialInstrument[]>([
        {
            ticker: "",
            price: 0,
            assetClass: ""
        }
    ]);

    const colDefs: any[] = [
        { field: 'ticker', sortingOrder: ['asc', null] },
        { field: 'price', sortingOrder: ['desc', null], cellStyle: priceColor },
        { field: 'assetClass', comparator: sortByAssetClass },
    ];

    const defaultColDefs = {
        flex: 1
    }

    const onGridReady = useCallback(() => {
        let data = getData();
        setRowData(data);
    }, []);

    const pageSelector = useMemo(() => {
        return [10, 15, 20];
    }, [])

    return (
        <div className="container">
            <div className="ag-theme-balham default-grid-size ">
                <AgGridReact<FinancialInstrument>
                    rowData={rowData}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDefs}
                    onGridReady={onGridReady}
                    suppressRowHoverHighlight
                    pagination={true}
                    paginationPageSize={10}
                    paginationPageSizeSelector={pageSelector}
                    //@ts-ignore
                    getRowClass={setBackgoundColor}
                />
            </div>
        </div>
    )

}

export default FinancialInstrument;