import {
    flexProperties,
    flexSprinkleProperties,
    flexPropertiesMap,
    flexValueToPropertyMap,
} from "./flex.css";

export const properties = {
    ...flexProperties,
} as const;

export const sprinklesProperties = [flexSprinkleProperties] as const;

export const propertyMap = {
    ...flexPropertiesMap,
} as const;

export const valueToPropertyMap = {
    ...flexValueToPropertyMap,
} as const;

export type PropertyMap = typeof propertyMap;
export type PropertyMapKey = keyof PropertyMap;
export type ValueToPropertyMap = typeof valueToPropertyMap;
export type ValueToPropertyMapKey = keyof ValueToPropertyMap;
