export const reduceToObject = (objList: Record<string, unknown>[]) => {
    return objList.reduce((acc, obj) => {
        return { ...acc, ...obj };
    }, {});
};
