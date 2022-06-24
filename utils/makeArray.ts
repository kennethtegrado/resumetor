const makeArray = ({ data }: makeArrayParams): Array<any> => {
    const dataArray = [];

    for (const key in data) {
        let dataItem: dataItem = {};
        dataItem.key = key;
        dataItem.value = data.key;
        dataArray.push(dataItem);
    }

    return [];
};

export default makeArray;

interface makeArrayParams {
    data: any;
}

interface dataItem {
    key?: string;
    value?: any;
}
