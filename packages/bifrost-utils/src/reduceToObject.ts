export const reduceToObject = (objList: object[]) => {
    return objList.reduce((acc, obj) => {
        return { ...acc, ...obj };
    }, {});
};
