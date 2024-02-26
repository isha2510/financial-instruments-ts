import { CellStyle, RowClassParams } from "@ag-grid-community/core";

export const sortByAssetClass = (valueA: string, valueB: string) => {
    let order = ["Commodities", "Equities", "Credit"];
    let indexOfA = order.indexOf(valueA);
    let indexOfB = order.indexOf(valueB);
    return indexOfA - indexOfB;
}

export const priceColor = (params: any): CellStyle => {
    if (params.value > 0) {
        return { color: 'blue' }
    }
    return { color: 'red' }
}

export const setBackgoundColor = (params: RowClassParams): string | string[] | undefined => {
    return params.data!.assetClass.toLowerCase();

}