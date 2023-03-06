import { recipe } from "@vanilla-extract/recipes";
import globalVariantThemes from "./variants.css";

export const globalVariants = globalVariantThemes.variants;
export const globalVariantColors = globalVariantThemes.colors;

export const globalVariantsRecipeObject = {
    variant: {
        ...globalVariantThemes.variants,
    },

    color: {
        ...globalVariantThemes.colors,
    },
};

export const globalVariantRecipe = recipe({
    variants: globalVariantsRecipeObject,
});
