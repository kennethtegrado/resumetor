const makeArray = async (data: any): Promise<Array<makeArrayResult | any>> => {
    const dataArray = [];

    for (const key in data) {
        let dataItem: dataItem = {};

        if (!data[key]) continue;

        if (!Array.isArray(data[key])) {
            dataItem.key = key;
            dataItem.value = data[key];
            dataArray.push(dataItem);
        } else {
            data[key].forEach((item: any, index: number) => {
                const nestedKeys = Object.keys(item);

                for (const nestedKey of nestedKeys) {
                    dataItem.key = `${nestedKey} ${index + 1}`;
                    dataItem.value = data[key][index][nestedKey];
                    dataArray.push(dataItem);
                }
            });
        }
    }

    return dataArray;
};

export default makeArray;

interface dataItem {
    key?: string;
    value?: any;
}

interface makeArrayResult {
    key: string;
    value: string;
}
