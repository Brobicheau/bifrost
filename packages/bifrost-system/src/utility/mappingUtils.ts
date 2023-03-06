import { reduceToObject } from "@bifrost/utils/src";
import {
    propertyMap,
    PropertyMapKey,
    valueToPropertyMap,
    ValueToPropertyMapKey,
} from "./mappings";
import { sprinkles, sprinklesValueMap } from "./sprinkles.css";

const mappingFn = (className: string) =>
    propertyMap[className as PropertyMapKey] as string;

const mapProperty = ([key, value]: [key: string, value: unknown]) => {
    if (!value) return [{}];
    if (Array.isArray(value)) {
        return value.map((propertyName) => ({ [propertyName]: key }));
    }

    if (typeof value === "object") {
        return Object.entries(value).map(([propertyName, value]) => ({
            [propertyName]: key,
        }));
    }

    if (typeof value === "string") {
        return [{ [value]: key }];
    }
    return [{}];
};

const mapDefaultProperties = ([key, value]: [key: string, value: unknown]) => {
    if (!value) return [{}];
    if (Array.isArray(value)) {
        return value.map((property) => ({ [property]: property }));
    }

    if (typeof value === "object") {
        return Object.entries(value).map(([, value]) => ({
            [value]: value,
        }));
    }

    if (typeof value === "string") {
        return [{ [key]: key }];
    }
    return [{}];
};

export const createValueToPropertyMap = (properties: any) =>
    reduceToObject(Object.entries(properties).flatMap(mapProperty));

export const createDefaultPropertiesMap = (properties: any) =>
    reduceToObject(Object.entries(properties).flatMap(mapDefaultProperties));

export const mapClassNamesToValues = (classNames: string) => {
    const classNamesArray = classNames.split(" ");
    const values = classNamesArray
        .map(
            (className) =>
                sprinklesValueMap(className, mappingFn) as ValueToPropertyMapKey
        )
        .map((value) =>
            value ? { [valueToPropertyMap[value] as string]: value } : {}
        );
    return reduceToObject(values);
};

export const mappedSprinkles = (className: string) => {
    const mappedVal = mapClassNamesToValues(className);
    return sprinkles({
        ...mappedVal,
    });
};
