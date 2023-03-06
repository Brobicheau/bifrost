import { globalVariantsRecipeObject } from "@bifrost/system/src";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

const base = {};

export type Variants = RecipeVariants<typeof variants>;

export const variants = recipe({
    variants: {
        variant: {
            ...globalVariantsRecipeObject.variant,
        },
        color: {
            ...globalVariantsRecipeObject.color,
        },
    },
});
