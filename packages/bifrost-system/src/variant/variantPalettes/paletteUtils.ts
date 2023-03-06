import colors, { ColorKey } from "../../colors";
import * as styleGuide from "./variantStyleGuide";
import type { Guide, GuideValue } from "./variantStyleGuide";
import { reduceToObject } from "@bifrost/utils/src";
import { VariantPaletteStyles } from "../variantThemeUtils.css";

const applyStyle = (color: keyof typeof colors, guide: GuideValue) => {
    if (typeof guide === "number") {
        return colors[color][guide];
    } else if (typeof guide === "function") {
        return guide(color);
    }
    return guide;
};

export const createDefaultVariantStyles = (
    color: ColorKey,
    variant: string
) => {
    const guide = (styleGuide as { [key: string]: Guide })[variant];
    const guideProperties = Object.keys(guide) as (keyof Guide)[];
    const variantStyles = reduceToObject(
        guideProperties
            .filter((property) => guide[property])
            .map((property) => ({
                [property]: applyStyle(color, guide[property] as GuideValue),
            }))
    );

    return variantStyles as VariantPaletteStyles;
};

export const getDefaultVariantStyles = (color: ColorKey) => {
    const solid = createDefaultVariantStyles(color, "solid");
    const outlined = createDefaultVariantStyles(color, "outlined");
    const ghost = createDefaultVariantStyles(color, "ghost");

    return { solid, outlined, ghost };
};
