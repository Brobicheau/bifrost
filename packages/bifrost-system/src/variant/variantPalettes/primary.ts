import { VariantPaletteStyles } from "../variantThemeUtils.css";
import { createDefaultVariantStyles } from "./paletteUtils";

export const solid: VariantPaletteStyles = {
    ...createDefaultVariantStyles("blue", "solid"),
};

export const outlined: VariantPaletteStyles = {
    ...createDefaultVariantStyles("blue", "outlined"),
};

export const ghost: VariantPaletteStyles = {
    ...createDefaultVariantStyles("blue", "ghost"),
};
