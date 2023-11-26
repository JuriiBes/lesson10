export function removeItem(dataList, idItem) {
    return dataList.filter((item) => item.id !== idItem)
}
export function addItem(dataList, newObjectItem) {
    let result = dataList.push({
        ...newObjectItem,
        id: new Date().getTime(),
    })

    return result
}
export function filterDrivers(dataItem, dataFiltered) {
    console.log('ok')
    if (dataFiltered.name) {
        if (!dataItem.driverName.toLowerCase().includes(dataFiltered.name.toLowerCase())) return false
    }
    if (dataFiltered.expFrom) {
        if (dataItem.experience < dataFiltered.expFrom) return false
    }
    if (dataFiltered.expTo) {
        if (dataItem.experience > dataFiltered.expTo) return false
    }
    return true
}
