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
