import { defineProperties } from "@vanilla-extract/sprinkles";
import {
    createDefaultPropertiesMap,
    createValueToPropertyMap,
} from "./mappingUtils";

export const flexProperties = {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: {
        stretch: "stretch",
        "flex-start": "flex-start",
        "justify-center": "center",
        "flex-end": "flex-end",
        "space-around": "space-around",
        "space-between": "space-between",
    },
    alignItems: {
        stretch: "stretch",
        "flex-start": "flex-start",
        "align-center": "center",
        "flex-end": "flex-end",
    },
} as const;

export const flexPropertiesMap = createDefaultPropertiesMap(flexProperties);

export const flexValueToPropertyMap = createValueToPropertyMap(flexProperties);

export const flexSprinkleProperties = defineProperties({
    conditions: {
        default: {},
    },
    defaultCondition: "default",
    properties: flexProperties,
});
