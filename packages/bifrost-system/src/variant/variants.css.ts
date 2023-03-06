import variantPalettes from "./variantPalettes";
import { createVariantTheme, Palette } from "./variantThemeUtils.css";
export const variantStates = ["hover", "disabled", "focus"] as const;
export const variantProperties = ["background", "color", "border"] as const;

export type VariantState = "hover" | "disabled" | "focus"; // Replace with actual state types
export type VariantProperty = "background" | "color" | "border"; // Replace with actual property types

const palettes = Object.entries(variantPalettes).map(([key, value]) => ({
    name: key,
    ...value,
})) as Palette[];

export type GlobalVariant = ReturnType<typeof createVariantTheme>;

const globalVariants = palettes.reduce(
    (accum, palette) => {
        const variantTheme = createVariantTheme(
            palette,
            Object.keys(palette).filter((key) => key !== "name")
        );
        return {
            variants: {
                ...accum.variants,
                ...variantTheme.variants,
            },
            colors: {
                ...accum.colors,
                ...variantTheme.colors,
            },
        };
    },

    {
        variants: {} as GlobalVariant["variants"],
        colors: {} as GlobalVariant["colors"],
    }
);

export default globalVariants;
