import { createMapValueFn, createSprinkles } from "@vanilla-extract/sprinkles";
import { sprinklesProperties } from "./mappings";

export const sprinklesValueMap = createMapValueFn(...sprinklesProperties);
export const sprinkles = createSprinkles(...sprinklesProperties);
